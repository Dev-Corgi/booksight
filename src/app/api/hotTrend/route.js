import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const searchDt = searchParams.get('searchDt') || '20240819'; // Default date if not provided

  const apiUrl = `http://data4library.kr/api/hotTrend?authKey=${authKey}&searchDt=${searchDt}&format=json`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return NextResponse.json(data);
}