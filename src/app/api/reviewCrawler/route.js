// app/api/reviewCrawler/route.js (Next.js 13+ API routes)
import axios from 'axios';
import { JSDOM } from 'jsdom';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url).searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing required parameter: url' }, { status: 400 });
  }

  try {
    // HTML 가져오기
    const { data } = await axios.get(url);

    // jsdom을 사용하여 HTML 파싱
    const dom = new JSDOM(data);
    const document = dom.window.document;

    // 원하는 텍스트 추출
    const metaDescription = document.querySelector('meta[property="og:description"]');
    const text = metaDescription ? metaDescription.getAttribute('content') : 'No description found';

    // 상태에 텍스트 설정
    return NextResponse.json({ text: text });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
