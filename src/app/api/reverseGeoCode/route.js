// app/api/reverseGeocode/route.js

import { NextResponse } from 'next/server';

// API route handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const coords = searchParams.get('coords');

  if (!coords) {
    return NextResponse.json({ error: 'Missing required parameter: coords' }, { status: 400 });
  }

  try {
    const authID = process.env.NAVER_MAP_API_ID; // Environment variable
    const authKEY = process.env.NAVER_MAP_API_KEY; // Environment variable

    const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=admcode&output=json`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-NCP-APIGW-API-KEY-ID': authID,
        'X-NCP-APIGW-API-KEY': authKEY,
      },
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
