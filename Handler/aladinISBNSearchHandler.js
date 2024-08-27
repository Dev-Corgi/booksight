import aladinData from "@data/aladinData.json";

export default async function aladinISBNSearchHandler(ItemId) {

  async function aladinISBNSearchHandler(ItemId) {

    try {
      const response = await fetch(`https://localhost:3001/api/aladinISBNSearch?ItemId=${ItemId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch aladinISBNSearch");
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

  // const aladinISBNSearchResult = await aladinISBNSearchHandler(ItemId);
  // return aladinISBNSearchResult.item[0];

  const result = JSON.parse(JSON.stringify(aladinData[ItemId].item[0]));
  result.author = getAuthor(result.author);
  return result;



}
