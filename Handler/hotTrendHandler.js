import aladinData from "@data/aladinData.json";
import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function hotTrendHandler() {
  async function hotTrendHandler(date) {
    try {
      const response = await fetch(`https://localhost:3001/api/hotTrend?searchDt=${date}`);

      if (!response.ok) {
        throw new Error("Failed to fetch hotTrend");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  function getYesterday() {
    // Get today's date
    const today = new Date();

    // Subtract one day from today
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Format the date as yyyy-mm-dd
    const yyyy = yesterday.getFullYear();
    const mm = String(yesterday.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(yesterday.getDate()).padStart(2, "0");

    const formattedYesterday = `${yyyy}-${mm}-${dd}`;

    return formattedYesterday
  }

  // const hotTrendBooks = await hotTrendHandler(getYesterday());
  // const result = [];

  // for (const index in hotTrendBooks.response.results[0].result.docs) {
  //   const book = hotTrendBooks.response.results[0].result.docs[index];
  //   const aladinISBNSearchResult = await aladinISBNSearchHandler(
  //     book.doc.isbn13
  //   );
  //   result.push(aladinISBNSearchResult.item[0]);
  // }

  const hotTrends = [9791130605210,9791130607887,9791130610658];

  const result = await Promise.all(
    hotTrends.map((isbn13) => aladinISBNSearchHandler(isbn13))
  );

  return [result[0], result[1], result[2]];


}
