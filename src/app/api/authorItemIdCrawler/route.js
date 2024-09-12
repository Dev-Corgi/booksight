// app/api/reviewCrawler/route.js (Next.js 13+ API routes)
import axios from "axios";
import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const authorName = searchParams.get("authorName");
  const authorCode = searchParams.get("authorCode"); // Environment variable

  let page = 1;
  let itemIds = [];
  let hasMoreItems = true;

  while (hasMoreItems) {
    try {
      const url = `https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${authorName}@${authorCode}&BranchType=1&page=${page}`;
      const response = await axios.get(url);

      // Load the HTML into jsdom
      const dom = new JSDOM(response.data);
      const document = dom.window.document;

      // Select all browse_list_box divs with itemId attributes
      const browseListBoxes = document.querySelectorAll(
        "div.browse_list_box[itemId]"
      );

      // If no items are found, stop the loop
      if (browseListBoxes.length === 0) {
        hasMoreItems = false;
        // console.log("No more items to crawl. Stopping.");
        break;
      }

      // Extract itemId values and add them to the array
      browseListBoxes.forEach((box) => {
        const itemId = box.getAttribute("itemId");
        itemIds.push(itemId);
      });


      // Increment the page number for the next loop iteration
      page += 1;
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      break;
    }
  }

  itemIds = itemIds.map(Number);
  const res = NextResponse.json({ itemIds: itemIds });
  res.headers.set("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // 허용된 메소드 설정
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  ); // 허용된 헤더 설정

  return res;
}
