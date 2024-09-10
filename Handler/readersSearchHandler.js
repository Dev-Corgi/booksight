import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function readersSearchHandler(isbn13) {

  async function fetchReadersSearch(isbn13) {
    try {
      const response = await fetch(`/api/readersSearch?isbn13=${isbn13}`);

      if (!response.ok) {
        throw new Error("Failed to fetch hotTrend");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const readersBooks = await fetchReadersSearch(isbn13);


  const responses = await Promise.all(
    readersBooks.response.docs.map(async (book) => await aladinISBNSearchHandler(book.book.isbn13,["authors","ratingInfo"]))
  );

  return responses;


}
