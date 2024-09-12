export default async function authorItemIdCrawlerHandler(authorName,authorCode) {
    async function fetchAuthorItemIdCrawler(authorName,authorCode) {
      try {
        const response = await fetch(`/api/authorItemIdCrawler?authorName=${authorName}&authorCode=${authorCode}`);
  
        if (!response.ok) {
          throw new Error("Failed to fetch authorItemId");
        }
  
        const result = await response.json();
  
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  
    const authorItemIdCrawlerResult = await fetchAuthorItemIdCrawler(authorName,authorCode);
    return authorItemIdCrawlerResult;
  
  }
  
  
  
  