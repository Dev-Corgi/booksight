// app/api/reverseGeocode/route.js

import { NextResponse } from 'next/server';

// API route handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword');
  const authKey = process.env.NARU_API_KEY; // Environment variable

  if (!keyword) {
    return NextResponse.json({ error: 'Missing required parameter: keyword' }, { status: 400 });
  }

  try {

    const apiUrl = `http://data4library.kr/api/srchBooks?authKey=${authKey}&keyword=${keyword}&sort=loan&order=desc&format=json`;
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
