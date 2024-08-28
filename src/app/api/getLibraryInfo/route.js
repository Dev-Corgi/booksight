import { NextResponse } from 'next/server';

export async function GET(request) {
  const authKey = process.env.NARU_API_KEY; // Environment variable
  const { searchParams } = new URL(request.url);
  const libCode = searchParams.get('libCode');

  if (!libCode) {
    return NextResponse.json({ error: 'Missing required parameter: libCode' }, { status: 400 });
  }

  const apiUrl = `http://data4library.kr/api/extends/libSrch?authKey=${authKey}&libCode=${libCode}&format=json`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text(); // Read the error message from response
      console.error(`API request failed: ${response.status} ${response.statusText}. ${errorText}`);
      return NextResponse.json({ error: 'Failed to fetch data from external API' }, { status: response.status });
    }

    const data = await response.json();

    const res = NextResponse.json(data);
    res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all domains
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
    res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // Allowed headers

    return res;
  } catch (error) {
    console.error('Error occurred while fetching library info:', error.message);
    return NextResponse.json({ error: 'Server error occurred', details: error.message }, { status: 500 });
  }
}
