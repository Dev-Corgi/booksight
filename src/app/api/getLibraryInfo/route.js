import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const libCode = searchParams.get('libCode') || null; // libCode


  const apiUrl = `http://data4library.kr/api/extends/libSrch?authKey=${authKey}&libCode=${libCode}&format=json`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return NextResponse.json(data);
}