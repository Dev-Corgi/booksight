// app/api/reverseGeocode/route.js

import { NextResponse } from 'next/server';

// API route handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const authKey = process.env.ALADIN_API_KEY; // Environment variable
  const CategoryId = searchParams.get('CategoryId');

  if (!type) {
    return NextResponse.json({ error: 'Missing required parameter: type' }, { status: 400 });
  }

  try {

    const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${authKey}&QueryType=${type}&SearchTarget=Book&output=js&Version=20131101${CategoryId != null ? `&CategoryId=${CategoryId}` : null}`;
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
