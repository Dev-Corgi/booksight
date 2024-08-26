export default async function getStaticMapHandler({ longitude, latitude }) {

  async function fetchGetStaticMap(longitude, latitude) {
    const coords = `${longitude},${latitude}`;
    const pos =`${longitude} ${latitude}`;

    // API 호출: Blob 응답을 직접 받기 위해 headers와 method를 설정합니다.
    const response = await fetch(`/api/getStaticMap?coords=${coords}&pos=${pos}`, {
      method: 'GET',
      headers: {
        'Accept': 'image/png', // 반환 받을 응답 형식으로 이미지 설정
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const blob = await response.blob(); // 응답을 Blob으로 처리
    return blob;
  }

  try {
    const blob = await fetchGetStaticMap(longitude, latitude);
    const imageUrl = URL.createObjectURL(blob); // Blob 데이터를 URL로 변환
    console.log(imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('Error fetching static map:', error);
    return null; // 오류 처리: 이미지 URL 대신 null 반환
  }
}
