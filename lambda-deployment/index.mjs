// node-fetch를 ES 모듈 방식으로 가져오기
import fetch from 'node-fetch';

export const handler = async (event) => {
  const authID = process.env.NAVER_MAP_API_ID; 
  const authKEY = process.env.NAVER_MAP_API_KEY; 
  const coords = event.queryStringParameters.coords;

  const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=roadaddr&output=json`;
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-NCP-APIGW-API-KEY-ID': authID,
      'X-NCP-APIGW-API-KEY': authKEY,
    },
  }); 
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
