
export default async function aladinListSearchAPI(type,CategoryId = null) {

  async function fetchAladinListSearch(type,CategoryId) {
    
    const authKey = process.env.ALADIN_API_KEY; // Environment variable

    try {

      const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${authKey}&QueryType=${type}&SearchTarget=Book&output=js&Version=20131101${CategoryId != null ? `&CategoryId=${CategoryId}` : null}`;
      console.log(apiUrl);
      const response = await fetch(apiUrl, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
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
