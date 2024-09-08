export default async function getStaticMapHandler({ longitude, latitude,level = 15 }) {
  async function fetchGetStaticMap(longitude, latitude,level) {
    const coords = `${longitude},${latitude}`;
    const pos = `${longitude} ${latitude}`;

    const response = await fetch(`/api/getStaticMap?coords=${coords}&pos=${pos}&level=${level}`, {
      method: 'GET',
      headers: {
        'Accept': 'image/png', // 이미지를 반환받기 위해 Accept 헤더를 설정
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 이미지를 Base64로 인코딩
    const base64Image = buffer.toString('base64');
    return `data:image/png;base64,${base64Image}`;
  }

  try {
    const imageUrl = await fetchGetStaticMap(longitude, latitude,level);
    return imageUrl; // Base64 인코딩된 이미지를 반환
  } catch (error) {
    console.error('Error fetching static map:', error);
    return null;
  }
}
