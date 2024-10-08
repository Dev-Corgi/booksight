
export default async function getLibraryInfoHandler(libCode) {


    async function fetchGetLibraryInfo(libCode) {

        const response = await fetch(`/api/getLibraryInfo?libCode=${libCode}`);
        const data = await response.json();
        return data;
      };

  const getLibraryInfoResult = await fetchGetLibraryInfo(libCode);
  return getLibraryInfoResult.response.libs[0].lib;




}
