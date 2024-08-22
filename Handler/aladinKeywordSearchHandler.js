import keywordSearchResultData from "@data/keywordSearchResult.json"

export default async function aladinKeywordSearchHandler(SearchWord) {

  async function aladinKeywordSearchHandler(SearchWord) {

    try {
      const response = await fetch(`/api/aladinKeywordSearch?SearchWord=${SearchWord}`);

      if (!response.ok) {
        throw new Error("Failed to fetch aladinKeywordSearch");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  function getAuthor(author){
    const authorInput = author;
    const pattern = /^(.*?)\s*\(지은이\)/;

    return authorInput.match(pattern)[1];
    }

  // const aladinISBNSearchResult = await aladinKeywordSearchHandler(SearchWord);
  // return aladinISBNSearchResult.item;

  const result = JSON.parse(JSON.stringify(keywordSearchResultData.item));
  for(const book of result){
    book.author = getAuthor(book.author);
  }
  return result;

  return keywordSearchResultData.item;




}
