import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function naruKeywordSearchHandler(keyword) {

  async function fetchReadersSearch(keyword) {
    try {
      const response = await fetch(`/api/naruKeywordSearch?keyword=${keyword}`);

      if (!response.ok) {
        throw new Error("Failed to fetch naruKeywordSearch");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const naruKeywordSearchResult = await fetchReadersSearch(keyword);

  const responses = await Promise.all(
    naruKeywordSearchResult.response.docs.map(async (book) => await aladinISBNSearchHandler(book.doc.isbn13))
  );

  return responses;


}
