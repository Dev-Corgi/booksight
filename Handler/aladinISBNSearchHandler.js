
export default async function aladinISBNSearchHandler(ItemId,OptResult=null) {

  async function aladinISBNSearchHandler(ItemId,OptResult) {
    

    try {
      const response = await fetch(`/api/aladinISBNSearch?ItemId=${ItemId}${OptResult == null ? "" :`&OptResult=${OptResult}`}`);

      if (!response.ok) {
        throw new Error("Failed to fetch aladinISBNSearch");
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

  const aladinISBNSearchResult = await aladinISBNSearchHandler(ItemId,OptResult);
  aladinISBNSearchResult.item[0].author = getAuthor(aladinISBNSearchResult.item[0].author);
  return aladinISBNSearchResult.item[0];

  // const result = JSON.parse(JSON.stringify(aladinData[ItemId].item[0]));
  // result.author = getAuthor(result.author);
  // return result;



}
