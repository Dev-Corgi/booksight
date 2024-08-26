import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const libCode = searchParams.get('libCode') || '20240819'; // Default date if not provided
  const isbn13 = searchParams.get('isbn13') || '20240819'; // Default date if not provided

  const apiUrl = `http://data4library.kr/api/bookExist?authKey=${authKey}&libCode=${libCode}&isbn13=${isbn13}&format=json`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return NextResponse.json(data);
}