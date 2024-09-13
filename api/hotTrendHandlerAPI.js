import aladinISBNSearchHandler from "./aladinISBNSearchHandler";

export default async function hotTrendHandler() {
  async function hotTrendHandler(date) {
      const authKey = process.env.NARU_API_KEY; // Environment variable
    try {  
        const searchDt = date; // Default date if not provided
        const apiUrl = `http://data4library.kr/api/hotTrend?authKey=${authKey}&searchDt=${searchDt}&format=json`;
        const response = await fetch(apiUrl);

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

  function getAuthor(author) {
    const authorInput = author;
    const pattern = /^(.*?)\s*\(지은이\)/;
    const match = authorInput.match(pattern);
    
    return match ? match[1] : author;
}

  const hotTrendBooks = await hotTrendHandler(getYesterday());

  const responses = await Promise.all(
    hotTrendBooks.response.results[0].result.docs.map(async (book) => await aladinISBNSearchHandler(book.doc.isbn13,["authors","ratingInfo"]))
  );

  const bookResults = responses.map((book)=>{
    return{
      title : book.title,
      authorName : getAuthor(book.author),
      isbn13 : book.isbn13,
      cover: book.cover,
      customerReviewRank : book.customerReviewRank,
      description : book.description
    }
  })


  return [bookResults[0], bookResults[1], bookResults[2]];


}
