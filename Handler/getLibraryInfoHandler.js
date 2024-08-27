
export default async function getLibraryInfoHandler(libCode) {


    async function fetchGetLibraryInfo(libCode) {

        const response = await fetch(`https://localhost:3001/api/getLibraryInfo?libCode=${libCode}`);
        const data = await response.json();
        return data;
      };

  const getLibraryInfoResult = await fetchGetLibraryInfo(libCode);
  // console.log(getLibraryInfoResult);
  return getLibraryInfoResult.response.libs[0].lib;




}
