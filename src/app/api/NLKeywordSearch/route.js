// app/api/reverseGeocode/route.js

import { NextResponse } from 'next/server';

// API route handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const kwd = searchParams.get('kwd');
  const authKey = process.env.NL_API_Key; // Environment variable

  try {

    const apiUrl = `https://www.nl.go.kr/NL/search/openApi/search.do?key=${authKey}&kwd=${kwd}&systemType=오프라인자료&pageNum=1&pageSize=5&category=도서&apiType=json&srchTarget=title&gu2=kdc&detailSearch=true&guCode2=8&gu12=kor`;
    const response = await fetch(apiUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Set CORS headers
    const res = NextResponse.json(data);
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    return res;
  } catch (error) {
    console.error('Error occurred:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
