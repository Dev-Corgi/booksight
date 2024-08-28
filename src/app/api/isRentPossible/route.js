import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const libCode = searchParams.get('libCode') || '20240819'; // Default date if not provided
  const isbn13 = searchParams.get('isbn13') || '20240819'; // Default date if not provided

  const apiUrl = `http://data4library.kr/api/bookExist?authKey=${authKey}&libCode=${libCode}&isbn13=${isbn13}&format=json`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const res =  NextResponse.json(data);
  res.headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용된 메소드 설정
  res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // 허용된 헤더 설정

  return res;
}