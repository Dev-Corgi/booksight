
export default async function isRentPossibleHandler(libraries,isbn13) {
  async function fetchIsRentPossible(libraries,isbn13) {
    const urls = []
    libraries.map((library,index)=>{
      urls.push(`http://localhost:3000/api/isRentPossible?libCode=${library.libCode}&isbn13=${isbn13}`);
    })
    try {
  
      // 동시에 요청을 보내기
      const responses = await Promise.all(
        urls.map((url) => fetch(url))
      );
  
      // 응답에서 JSON 데이터 추출
      const results = await Promise.all(
        responses.map((response) => response.json())
      );
  
      return results
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const isRentPossibleResult = await fetchIsRentPossible(libraries,isbn13);
  return isRentPossibleResult;

}



