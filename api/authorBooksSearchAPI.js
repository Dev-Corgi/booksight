import axios from "axios";
import { JSDOM } from "jsdom";
export default async function aladinAuthorSearchHandler(
  authorName,
  authorCode
) {
  const authKey = process.env.ALADIN_API_KEY; // Environment variable

  async function fetchAladinAuthorSearch(Query) {
    try {
      const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${authKey}&Query=${Query}&Sort=PublishTime&QueryType=Author&SearchTarget=Book&output=js&Version=20131101&MaxResults=50&Start=${1}`;
      console.log(`author url 은 : ${apiUrl}`);

      const initialResponse = await fetch(apiUrl);
      if (!initialResponse.ok) {
        throw new Error(
          `Initial fetch failed with status: ${initialResponse.status}`
        );
      }
      const initialData = await initialResponse.json();

      const { totalResults, itemsPerPage } = initialData;
      const totalPages = Math.ceil(totalResults / itemsPerPage);


      // Handle the case where there is only 1 page
      if (totalPages === 1) {

        // Directly process the first page
        const data = initialData;
        if (Array.isArray(data.item)) {
          return data.item.filter((book) => book.isbn13 !== "");
        } else {
          console.warn("Unexpected response format for single page:", data);
          return [];
        }
      }

      // Collect requests for all pages if there are multiple pages
      const requests = [];
      for (let page = 1; page <= totalPages; page++) {
        requests.push(
          fetch(
            `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${authKey}&Query=${Query}&Sort=PublishTime&QueryType=Author&SearchTarget=Book&output=js&Version=20131101&MaxResults=50&Start=${page}`
          )
        );
      }

      // Handle all requests and get responses
      const responses = await Promise.all(requests);

      // Process the responses
      const allItems = responses.flatMap((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            if (Array.isArray(data.item)) {
              return data.item.filter((book) => book.isbn13 !== "");
            } else {
              console.warn("Unexpected response format:", data);
              return [];
            }
          });
        } else {
          console.error(
            `Fetch failed for a page with status: ${response.status}`
          );
          return [];
        }
      });

      // Wait for all items to be processed
      const processedItems = await Promise.all(allItems);
      return processedItems.flat();
    } catch (error) {
      console.error("Error in fetchAladinAuthorSearch:", error);
      return [];
    }
  }

  async function NewValidAuthorItemId(books, itemIds) {
    itemIds = itemIds.map(Number);

    const filteredBooks = await Promise.all(
      books.map(async (book) => {
        if (itemIds.includes(book.itemId)) {
          return {
            title: book.title,
            authorName: book.author,
            isbn13: book.isbn13,
            cover: book.cover,
            customerReviewRank: book.customerReviewRank,
            pubDate: book.pubDate,
          };
        }
        return null;
      })
    );

    const validBooks = filteredBooks.filter((book) => book !== null);

    return validBooks;
  }

  async function fetchAuthorItemIdCrawler(authorName, authorCode) {
    try {
      const maxPage = await get_maxPage(authorName, authorCode);
      console.log(`맥스 페이지는 ${maxPage}`)
      const results = await Promise.all(
        Array.from({ length: maxPage }).map((_, index) =>
          authorItemIdCrawler(authorName, authorCode, index + 1)
        )
      );

      const itemIds = results.flat().map(Number).filter(Boolean); // Ensure only valid numbers

      if (!itemIds.length) {
        throw new Error("No valid itemIds were found.");
      }

      return itemIds;
    } catch (error) {
      console.error("Error fetching authorItemId:", error);
      return []; // Return an empty array if the fetch fails
    }
  }

  async function authorItemIdCrawler(authorName, authorCode, page) {
    try {
      const itemIds = [];
      const url = `https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${authorName}@${authorCode}&BranchType=1&page=${page}`;
      const response = await axios.get(url);

      // Load the HTML into jsdom
      const dom = new JSDOM(response.data);
      const document = dom.window.document;

      // Select all browse_list_box divs with itemId attributes
      const browseListBoxes = document.querySelectorAll(
        "div.browse_list_box[itemId]"
      );

      // Extract itemId values and add them to the array
      browseListBoxes.forEach((box) => {
        const itemId = box.getAttribute("itemId");
        itemIds.push(itemId);
      });

      return itemIds;

      // Increment the page number for the next loop iteration
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
    }
  }

  async function get_maxPage(authorName, authorCode) {
    const url = `https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${authorName}@${authorCode}&BranchType=1&page=${1}`;
    
    // Fetch HTML from the URL
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
  
    // Select the list elements
    const liElements = document.querySelectorAll(".search_list_newnum ul li");
  
    // If no elements are found, return 1
    if (liElements.length === 0) {
      return 1;
    }
  
    let counter = 1;
    let highestPageSet = 0;
  
    // Iterate through the li elements to extract the Page_Set value
    liElements.forEach((li) => {
      const aTag = li.querySelector("a");
      const onClickAttr = aTag.getAttribute("onclick");
  
      if (onClickAttr) {
        const pageSetMatch = onClickAttr.match(/Page_Set\('(\d+)'\)/);
  
        if (pageSetMatch) {
          const pageSetValue = parseInt(pageSetMatch[1], 10);
  
          // Find the highest Page_Set value
          if (pageSetValue > highestPageSet) {
            highestPageSet = pageSetValue;
          }
  
          // Handle next page number if the element has "search_numlist_next" class
          if (aTag.classList.contains("search_numlist_next")) {
            counter = pageSetValue;
          }
        }
      }
    });
  
    // If no "search_numlist_next" was found, use highestPageSet
    if (counter === 1) {
      counter = highestPageSet;
    }
  
    return counter;
  }
  

  const [AladinAuthorSearchResult, AuthorItemIds] = await Promise.all([
    fetchAladinAuthorSearch(authorName),
    fetchAuthorItemIdCrawler(authorName, authorCode),
  ]);

  // const ValidAuthorResult = await fetchValidAuthorCode(
  //   AladinAuthorSearchResult,
  //   authorCode
  // );
  console.log(`Author Search Result : ${AladinAuthorSearchResult}`);
  console.log(`Author Item Ids : ${AuthorItemIds}`);
  const ValidAuthorResult = await NewValidAuthorItemId(
    AladinAuthorSearchResult,
    AuthorItemIds
  );

  return ValidAuthorResult;
}
