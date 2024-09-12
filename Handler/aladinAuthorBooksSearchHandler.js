import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function aladinAuthorSearchHandler(
  authorName,
  authorCode
) {

  async function fetchAladinAuthorSearch(Query) {
    try {
      // 첫 번째 호출에서 totalResults와 itemsPerPage를 가져옴
      const initialResponse = await fetch(
        `/api/aladinAuthorSearch?Query=${Query}&Start=1`
      );
      if (!initialResponse.ok) {
        throw new Error(
          `Initial fetch failed with status: ${initialResponse.status}`
        );
      }
      const initialData = await initialResponse.json();

      const { totalResults, itemsPerPage } = initialData;

      // 총 페이지 수 계산
      const totalPages = Math.ceil(totalResults / itemsPerPage);

      // 모든 페이지의 데이터를 병렬로 요청
      const requests = [];
      for (let page = 1; page <= totalPages; page++) {
        requests.push(
          fetch(`/api/aladinAuthorSearch?Query=${Query}&Start=${page}`)
        );
      }

      // 병렬 요청 처리 및 응답 데이터 수집
      const responses = await Promise.all(
        requests.map(async (request) => {
          try {
            const response = await request;
            if (!response.ok) {
              throw new Error(`Fetch failed with status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error("Fetch error:", error);
          }
        })
      );

      const allItems = responses.flatMap((response) => {
        if (Array.isArray(response.item)) {
          return response.item.filter((book) => book.isbn13 !== "");
        } else {
          console.warn("Unexpected response format:", response);
        }
      });

      return allItems;
    } catch (error) {
      console.error("Error in getServerSideProps:", error);
    }
  }

  async function fetchValidAuthorCode(books, authorCode) {
    const filteredBooks = await Promise.all(
      books.map(async (book) => {
        const ISBNresult = await aladinISBNSearchHandler(book.isbn13, [
          "authors",
          "ratingInfo",
        ]);
        if (
          ISBNresult.subInfo.authors.some(
            (author) => author.authorId == authorCode
          )
        ) {
          return ISBNresult;
        }
        return null; // 조건을 충족하지 않으면 null을 반환
      })
    );

    const validBooks = filteredBooks.filter((book) => book !== null);

    return validBooks;
  }

  async function NewValidAuthorItemId(books,itemIds){
    console.log(typeof itemIds[0]);
    console.log(`리스트는 : ${(itemIds)}`)
    itemIds = itemIds.map(Number);

    const filteredBooks = await Promise.all(
      books.map(async (book) => {
        console.log(typeof book.itemId);
        console.log(`아이디는 : ${book.itemId}`)

      if(itemIds.includes(book.itemId)){
        console.log("매칭!")
        return {
          title : book.title,
          authorName : book.author,
          isbn13 : book.isbn13,
          cover: book.cover,
          customerReviewRank : book.customerReviewRank,
          pubDate: book.pubDate
        }
      }
      return null;
      })
    );

    const validBooks = filteredBooks.filter((book) => book !== null);

    return validBooks;


  }

  async function fetchAuthorItemIdCrawler(authorName,authorCode) {
    try {
      const response = await fetch(`/api/authorItemIdCrawler?authorName=${authorName}&authorCode=${authorCode}`);

      if (!response.ok) {
        throw new Error("Failed to fetch authorItemId");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const AladinAuthorSearchResult = await fetchAladinAuthorSearch(authorName);
  const AuthorItemIds =  await fetchAuthorItemIdCrawler(authorName,authorCode);

  // const ValidAuthorResult = await fetchValidAuthorCode(
  //   AladinAuthorSearchResult,
  //   authorCode
  // );

  const ValidAuthorResult = await NewValidAuthorItemId(
    AladinAuthorSearchResult,
    AuthorItemIds.itemIds
  );

  return ValidAuthorResult;
}
