
export default async function getLibraryInfoHandler(libCode) {


    async function fetchGetLibraryInfo(libCode) {

        const response = await fetch(`http://localhost:3000/api/getLibraryInfo?libCode=${libCode}`);
        const data = await response.json();
        return data;
      };

  const getLibraryInfoResult = await fetchGetLibraryInfo(libCode);
  // console.log(getLibraryInfoResult);
  return getLibraryInfoResult.response.libs[0].lib;




}
