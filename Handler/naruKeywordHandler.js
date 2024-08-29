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
  const result = [];

  for (const book of naruKeywordSearchResult.response.docs) {
    const aladinISBNSearchResult = await aladinISBNSearchHandler(
      book.doc.isbn13
    );
    result.push(aladinISBNSearchResult);
  }

  return result;


}
