export default async function searchNearByLibraryHandler({latitude,longitude}) {

    async function fetchSearchNearByLibrary(latitude, longitude) {

        const response = await fetch(`https://localhost:3001/api/searchNearByLibrary?latitude=${latitude}&longitude=${longitude}`, {
            method: 'GET', // 명시적으로 GET 메서드를 사용,
            headers: {
              'Content-Type': 'application/json', // 요청의 Content-Type을 설정
              'Access-Control-Allow-Origin': 'https://localhost:3001', // CORS 설정
          },
          });
        const data = await response.json();
        return data;
      };

 

  const searchNearByLibraryResult = await fetchSearchNearByLibrary(latitude,longitude);
  return searchNearByLibraryResult;




}
