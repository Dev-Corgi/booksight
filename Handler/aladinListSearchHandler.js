
export default async function aladinListSearchHandler(type) {

  async function fetchAladinListSearch(type) {
    try {
      const response = await fetch(`/api/aladinListSearch?type=${type}`);

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

  const naruKeywordSearchResult = await fetchAladinListSearch(type);
  const filteredResult = naruKeywordSearchResult.item.filter(book => book.isbn13 !== "");
    for(const book of filteredResult){
    book.author = getAuthor(book.author);
  }
  return filteredResult;



}
