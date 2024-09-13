// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // 데이터베이스 호스트
  user: 'root', // 데이터베이스 사용자 이름
  password: 'Aa6765244!', // 데이터베이스 비밀번호
  database: 'booklistdatas', // 데이터베이스 이름
});

export default pool;
