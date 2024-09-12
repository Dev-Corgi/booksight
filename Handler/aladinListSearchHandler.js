import aladinISBNSearchHandler from "./aladinISBNSearchHandler";
import getAuthor from "root/utils/getAuthor";

export default async function aladinListSearchHandler(type,CategoryId = null) {

  async function fetchAladinListSearch(type,CategoryId) {
    try {
      const response = await fetch(`/api/aladinListSearch?type=${type}&CategoryId=${CategoryId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch aladinListSearch");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  function getAuthor(author) {
    const authorInput = author;
    const pattern = /^(.*?)\s*\(지은이\)/;
    const match = authorInput.match(pattern);
    
    return match ? match[1] : author;
}

  const aladinListSearchResult = await fetchAladinListSearch(type,CategoryId);
  const filteredResult = aladinListSearchResult.item.filter(book => book.isbn13 !== "");
  //   for(const book of  aladinListSearchResult.item){
  //   book.author = getAuthor(book.author);
  // }

  const bookResults = filteredResult.map((book)=>{
    book.author = getAuthor(book.author);
    return{
      title : book.title,
      authorName : book.author,
      isbn13 : book.isbn13,
      cover: book.cover,
      customerReviewRank : book.customerReviewRank
    }
  })

  // const ISBNSearchResults = await Promise.all(
  //   filteredResult.map(async (book) => await aladinISBNSearchHandler(book.isbn13,["authors","ratingInfo"]))
  // );

  return bookResults;

  // return aladinListSearchResult.item;



}
