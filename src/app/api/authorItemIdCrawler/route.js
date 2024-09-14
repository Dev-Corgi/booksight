// app/api/reviewCrawler/route.js (Next.js 13+ API routes)
import axios from "axios";
import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const authorName = searchParams.get("authorName");
  const authorCode = searchParams.get("authorCode"); // Environment variable

  const maxPage = await get_maxPage(authorName,authorCode)

  const results = await Promise.all(
    Array.from({ length: maxPage }).map((_, index) => authorItemIdCrawler(authorName, authorCode, index + 1))
  );

  const itemIds = results.flat().map(Number);

  const res = NextResponse.json({ itemIds: itemIds });
  res.headers.set("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // 허용된 메소드 설정
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  ); // 허용된 헤더 설정

  return res;
}

async function authorItemIdCrawler(authorName,authorCode,page){
  try{
  const itemIds = [];
  const url = `https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${authorName}@${authorCode}&BranchType=1&page=${page}`;
  const response = await axios.get(url);

  // Load the HTML into jsdom
  const dom = new JSDOM(response.data);
  const document = dom.window.document;

  // Select all browse_list_box divs with itemId attributes
  const browseListBoxes = document.querySelectorAll(
    "div.browse_list_box[itemId]"
  );

  // Extract itemId values and add them to the array
  browseListBoxes.forEach((box) => {
    const itemId = box.getAttribute("itemId");
    itemIds.push(itemId);
  });

  return itemIds;


  // Increment the page number for the next loop iteration
} catch (error) {
  console.error(`Error fetching page ${page}:`, error);
}
}

async function get_maxPage(authorName, authorCode){
  const url = `https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${authorName}@${authorCode}&BranchType=1&page=${1}`;
  //////////////////////////////  get Counter
// 임의의 URL로부터 HTML을 가져옴
const response = await axios.get(url);

// 가져온 HTML을 파싱
const dom = new JSDOM(response.data);
const document = dom.window.document;

// 페이지 번호들을 추출하는 로직
const liElements = document.querySelectorAll('.search_list_newnum ul li');
let counter = 1;
let highestPageSet = 0;

// li 태그에서 Page_Set 값을 추출
liElements.forEach((li) => {
  const aTag = li.querySelector('a');
  const onClickAttr = aTag.getAttribute('onclick');
  
  if (onClickAttr) {
    const pageSetMatch = onClickAttr.match(/Page_Set\('(\d+)'\)/);

    if (pageSetMatch) {
      const pageSetValue = parseInt(pageSetMatch[1], 10);
      
      // Page_Set 중 가장 큰 값 찾기
      if (pageSetValue > highestPageSet) {
        highestPageSet = pageSetValue;
      }

      // search_numlist_next 클래스를 가진 경우 처리
      if (aTag.classList.contains('search_numlist_next')) {
        counter = pageSetValue;
      }
    }
  }
});

// search_numlist_next 가 없는 경우, highestPageSet 사용
if (counter === 1) {
  counter = highestPageSet;
}

return counter
}
