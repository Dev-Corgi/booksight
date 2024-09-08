import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function hotTrendHandler() {
  async function hotTrendHandler(date) {
    try {
      const response = await fetch(`/api/hotTrend?searchDt=${date}`);

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

  const hotTrendBooks = await hotTrendHandler(getYesterday());

  const responses = await Promise.all(
    hotTrendBooks.response.results[0].result.docs.map(async (book) => await aladinISBNSearchHandler(book.doc.isbn13,["authors"]))
  );


  return [responses[0], responses[1], responses[2]];


}
