import axios from 'axios';
import { JSDOM } from 'jsdom';
// valid 뭔가 잘못 날아간다
export default async function authorCrawlerAPI(url) {
    async function fetchAuthorCrawler(url) {
        
          try {
            // HTML 가져오기
            const { data } = await axios.get(url);
        
            // jsdom을 사용하여 HTML 파싱
            const dom = new JSDOM(data);
            const document = dom.window.document;
        
            // 원하는 텍스트 추출
            const descriptionElement = document.querySelector('div[style="text-align: left"] p');
            const description = descriptionElement ? descriptionElement.textContent.trim() : 'Description not found';


        return description;
      } catch (error) {
        console.log(error);
      }
    }
  
    const authorCrawlResult = await fetchAuthorCrawler(url);
    return authorCrawlResult;
  
  }


  
  
  
  