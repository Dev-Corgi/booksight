import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.ALADIN_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const SearchWord = searchParams.get('SearchWord') || null; // ISBN number

  const apiUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${authKey}&Query=${SearchWord}&QueryType=Title&SearchTarget=Book&output=js&Version=20131101`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return NextResponse.json(data);
}