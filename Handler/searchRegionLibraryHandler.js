export default async function searchRegionLibraryHandler(region = null, dtl_region = null, pageNo = 1) {
    async function fetchSearchRegionLibrary(region,dtl_region,pageNo) {
      try {
        const response = await fetch(`/api/searchRegionLibrary?region=${region}&dtl_region=${dtl_region}&pageNo=${pageNo}`);
  
        if (!response.ok) {
          throw new Error("Failed to fetch isRentPossible");
        }
  
        const result = await response.json();
  
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  
    const searchRegionLibraryResult = await fetchSearchRegionLibrary(region,dtl_region,pageNo);
    return searchRegionLibraryResult.response;
  
  }
  
  
  
  