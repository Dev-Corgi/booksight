export default async function searchNearByLibraryHandler({latitude,longitude}) {

    async function fetchSearchNearByLibrary(latitude, longitude) {

        const response = await fetch(`/api/searchNearByLibrary?latitude=${latitude}&longitude=${longitude}`, {
            method: 'GET' // 명시적으로 GET 메서드를 사용
          });
        const data = await response.json();
        return data;
      };

 

  const searchNearByLibraryResult = await fetchSearchNearByLibrary(latitude,longitude);
  return searchNearByLibraryResult;




}
