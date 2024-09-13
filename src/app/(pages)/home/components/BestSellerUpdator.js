// ES 모듈 구문으로 바꾸기
import { CronJob } from 'cron';
import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import { join } from 'path';

// 하루에 한 번 실행하는 cron 작업 (매일 자정 00:00에 실행)
const job = new CronJob('0 0 * * *', async function () {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    // JSON 데이터를 파일로 저장
    writeFileSync(
      join(process.cwd(), 'scripts', 'data.json'),
      JSON.stringify(data, null, 2),
      'utf-8'
    );
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Failed to fetch and save data:', error);
  }
});

// 작업 시작
job.start();
