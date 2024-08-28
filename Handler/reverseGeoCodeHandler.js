export default async function reverseGeoCodeHandler({ latitude, longitude }) {

  async function fetchReverseGeoCode(latitude, longitude) {
    const coords = `${longitude},${latitude}`;

    const response = await fetch(`https://mytau0sg6d.execute-api.ap-northeast-2.amazonaws.com/BookSightDevelopment?coords=${coords}`, {
      method: 'GET',
    });

    if (!response.ok) {
      // 응답이 실패했을 경우 오류 처리
      const errorData = await response.json();
      console.log(`에러: ${errorData}`);
      throw new Error(`Error: ${errorData.error}`);
    }

    // const data = await response.json();
    // return data;

    const data = await response.json();
    const responseBody = await data.body;
    const result = JSON.parse(responseBody);
    return result
  }

  try {
    const reverseGeoCodeResult = await fetchReverseGeoCode(latitude, longitude);
    console.log(reverseGeoCodeResult)
    const region = reverseGeoCodeResult.results[0].region;
    const area1 = region.area1.name + " ";
    const area2 = region.area2.name + " ";
    const area3 = region.area3.name + " ";
    const area4 = region.area4.name + " ";
    const land = reverseGeoCodeResult.results[0].land.name;
    const resultData = `${area1}${area2}${area3}${area4 !== " " ? area4 : ""}${land}`;

    return resultData;
  } catch (error) {
    console.error("Failed to fetch reverse geocode data:", error.message);
    return null; // 오류 발생 시 null 반환
  }
}
