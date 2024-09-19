// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // 데이터베이스 호스트
  user: 'root', // 데이터베이스 사용자 이름
  password: 'Aa6765244!', // 데이터베이스 비밀번호
  database: 'booklistdatas', // 데이터베이스 이름
  waitForConnections: true,
  connectionLimit: 10,  // 최대 연결 수 제한
  queueLimit: 0,        // 큐 대기 제한, 0이면 제한 없음
});

export default pool;

// 앱 종료 이벤트 처리
process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing MySQL pool.');
  await pool.end(); // 모든 MySQL 연결 닫기
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing MySQL pool.');
  await pool.end(); // 모든 MySQL 연결 닫기
});