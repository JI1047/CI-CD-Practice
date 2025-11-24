/**
 *  express 서버 생성 
 *  3000번 포트 연결
    / 요청이 들어오면 헬로우 월드 표시
    서버 실행시 3000포트 러닝중이라고 콘솔 찍기
 */


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});