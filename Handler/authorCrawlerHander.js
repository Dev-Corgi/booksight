export default async function authorCrawlerHandler(url) {
    async function fetchAuthorCrawler(url) {
      try {
        const response = await fetch(`/api/authorCrawler?url=${url}`, {
            method: 'GET', // 명시적으로 GET 메서드를 사용,
            headers: {
              'Content-Type': 'application/json', // 요청의 Content-Type을 설정
              'Access-Control-Allow-Origin': 'https://localhost:3001', // CORS 설정
          },});


  
        if (!response.ok) {
          throw new Error("Failed to fetch authorCrawler");
        }
  
        const result = await response.json();
  
        return result.description;
      } catch (error) {
        console.log(error);
      }
    }
  
    const authorCrawlResult = await fetchAuthorCrawler(url);
    return authorCrawlResult;
  
  }
  
  
  
  