// import axios from "axios";
// import { JSDOM } from "jsdom";

// export default async function reviewCrawlerHandler(url) {
//   async function fetchReviewCrawler(url) {
//     try {
//       // HTML 가져오기
//       const { data } = await axios.get(url);

//       // jsdom을 사용하여 HTML 파싱 (CSS parsing should be minimal)
//       const dom = new JSDOM(data, { resources: "usable", runScripts: "outside-only" });
//       const document = dom.window.document;

//       // 원하는 텍스트 추출
//       const metaDescription = document.querySelector('meta[property="og:description"]');
//       const text = metaDescription ? metaDescription.getAttribute("content") : "No description found";

//       return text;
//     } catch (error) {
//       console.error("Error fetching review:", error);
//       throw new Error("Failed to fetch review");
//     }
//   }

//   const reviewCrawlResult = await fetchReviewCrawler(url);
//   return reviewCrawlResult;
// }
