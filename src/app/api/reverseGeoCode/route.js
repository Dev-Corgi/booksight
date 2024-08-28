import { NextResponse } from 'next/server';

export async function GET(request) {
  const authID = process.env.NAVER_MAP_API_ID; // Environment variable
  const authKEY = process.env.NAVER_MAP_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const coords = searchParams.get('coords');

  const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=roadaddr&output=json`;
  const response = await fetch(apiUrl, {
    method: 'GET', // 기본값이 'GET'이지만 명시적으로 작성할 수 있습니다.
    headers: {
      'X-NCP-APIGW-API-KEY-ID': authID, // 요청의 콘텐츠 타입을 JSON으로 설정
      'X-NCP-APIGW-API-KEY': authKEY, // 인증 토큰을 헤더에 추가
    },
  }); 
  const data = await response.json();

  const res =  NextResponse.json(data);
  res.headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용된 메소드 설정
  res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // 허용된 헤더 설정

  return res;
}