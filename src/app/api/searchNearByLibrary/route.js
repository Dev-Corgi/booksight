import { NextResponse } from 'next/server';
import { getDistance } from 'geolib'; // 거리 계산 함수
import libraryRtreeData from "@data/librariesRtree.json"; // 미리 로드된 R-트리 데이터

// 좌표 내 범위 확인 함수
function isWithinBounds(lat, lon, bounds) {
  const [minLon, minLat, maxLon, maxLat] = bounds;
  return lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon;
}

// GET 요청 처리 함수
export async function GET(request) {
    const rTreeData = libraryRtreeData;
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');
  try {

    if (!latitude || !longitude) {
      console.error('위도와 경도가 제공되지 않았습니다.');
      return NextResponse.json({ error: '위도와 경도를 제공해야 합니다.' }, { status: 400 });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    // 1km 검색 반경 설정
    const searchRadiusKm = 2;
    const buffer = searchRadiusKm / 111.32; // 1도는 약 111.32km입니다.

    // 범위 설정 (버퍼 포함)
    const searchBounds = [
      userLon - buffer,
      userLat - buffer,
      userLon + buffer,
      userLat + buffer
    ];


    // R-트리 데이터에서 도서관 검색
    const results = rTreeData.filter(entry => {
      const { object } = entry;
      const { latitude, longitude } = object;
      const lat = parseFloat(latitude);
      const lon = parseFloat(longitude);

      // 검색 범위 내에 있는 도서관인지 확인
      return isWithinBounds(lat, lon, searchBounds);
    });


    // 결과에 거리 추가
    const librariesWithDistances = results.map(entry => {
      const { object } = entry;
      const { latitude, longitude } = object;
      const distanceToLibrary = getDistance(
        { latitude: userLat, longitude: userLon },
        { latitude: parseFloat(latitude), longitude: parseFloat(longitude) }
      );
      return { ...object, distance: distanceToLibrary };
    });


    // 거리 기준으로 정렬 후 상위 10개
    const closestLibraries = librariesWithDistances
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 10);


    const res =  NextResponse.json(closestLibraries);
    res.headers.set('Access-Control-Allow-Origin', '*'); // 모든 도메인 허용
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 허용된 메소드 설정
    res.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // 허용된 헤더 설정
  
    return res;
  } catch (error) {
    console.error('서버 오류 발생:', error);
    return NextResponse.json({ error: '서버에서 오류가 발생했습니다.' }, { status: 500 });
  }
}
