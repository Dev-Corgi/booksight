import aladinISBNSearchHandler from "./aladinISBNSearchHandler";
import getAuthor from "root/utils/getAuthor";

export default async function aladinKeywordSearchHandler(SearchWord,QueryType = "Keyword") {

  async function aladinKeywordSearchHandler(SearchWord,QueryType) {

    
    try {
      const response = await fetch(`/api/aladinKeywordSearch?SearchWord=${SearchWord}&QueryType=${QueryType}`);

      if (!response.ok) {
        throw new Error("Failed to fetch aladinKeywordSearch");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const aladinKeywordSearchResult = await aladinKeywordSearchHandler(SearchWord,QueryType);

  const filteredResult = aladinKeywordSearchResult.item.filter(book => book.isbn13 !== "");

  const bookResults = filteredResult.map((book)=>{
    return{
      title : book.title,
      authorName : getAuthor(book.author),
      isbn13 : book.isbn13,
      cover: book.cover,
      customerReviewRank : book.customerReviewRank
    }
  })
  
//   for(const book of filteredResult){
//   book.author = getAuthor(book.author);
// }

  // const ISBNSearchResults = await Promise.all(
  //   filteredResult.map(async (book) => await aladinISBNSearchHandler(book.isbn13,["authors","ratingInfo"]))
  // );

  return bookResults;

  // const result = JSON.parse(JSON.stringify(keywordSearchResultData.item));
  // for(const book of result){
  //   book.author = getAuthor(book.author);
  // }
  // return result;

  // return keywordSearchResultData.item;




}
