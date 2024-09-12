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

    // 패턴을 가진 <a> 태그 선택
    const targetATag = document.querySelector('a[href="javascript:void(0);"][class="search_numlist_next"][onclick^="Page_Set"]');

    let extractedValue = null;

    // <a> 태그가 존재하면 처리
    if (targetATag) {
      const imgTag = targetATTag.querySelector('img[src="//image.aladin.co.kr/img/m/2018/icon_last_1.png"]');

      if (imgTag) {
        const onclickAttr = targetATag.getAttribute('onclick');
        const match = onclickAttr.match(/Page_Set\('(\d+)'\)/);
        if (match && match[1]) {
          extractedValue = match[1];
        }
      }
    }

    // 상태에 텍스트 설정

    const res = NextResponse.json({ description: description });
    res.headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용된 메소드 설정
    res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // 허용된 헤더 설정

    return res;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error scraping author description' }, { status: 500 });
  }
}
