import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.ALADIN_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const SearchWord = searchParams.get('SearchWord') || null; // ISBN number
  const QueryType = searchParams.get('QueryType') || null; // ISBN number

  const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${authKey}&Query=${SearchWord}&QueryType=${QueryType}&SearchTarget=Book&output=js&Version=20131101`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const res =  NextResponse.json(data);
  res.headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용된 메소드 설정
  res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // 허용된 헤더 설정

  return res;
}