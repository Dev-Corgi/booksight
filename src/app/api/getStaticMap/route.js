import { NextResponse } from 'next/server';

export async function GET(request) {
  const authID = process.env.NAVER_MAP_API_ID; // Environment variable
  const authKEY = process.env.NAVER_MAP_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const coords = searchParams.get('coords');
  const pos = searchParams.get('pos');

  const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=900&h=450&center=${coords}&level=15&format=png&markers=type:d|size:mid|pos:${pos}`;
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-NCP-APIGW-API-KEY-ID': authID,
      'X-NCP-APIGW-API-KEY': authKEY,
    },
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
  

  const imageBuffer = await response.arrayBuffer(); // Get image data as ArrayBuffer

  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png', // Set the correct MIME type based on the image format
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}
