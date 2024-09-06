// app/api/reverseGeocode/route.js

import { NextResponse } from 'next/server';

// API route handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const region = searchParams.get('region');
  const dtl_region = searchParams.get('dtl_region');
  const pageNo = searchParams.get('pageNo');

  try {
    const apiUrl = `http://data4library.kr/api/libSrch?authKey=${authKey}&pageSize=10&format=json${region != "null" ? `&region=${region}` : ""}${dtl_region != "null" ? `&dtl_region=${dtl_region}` : ""}${pageNo != 1 ? `&pageNo=${pageNo}` : ""}`;
    console.log(`apiUrl 은 : ${apiUrl}`)
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
