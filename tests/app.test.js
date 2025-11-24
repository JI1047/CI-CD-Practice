/**
 * Supertest 라이브러리르 사용하기 위한 코드
    HTTP를 거치지 않고 가짜요청을 보낼 수 있다 서버를 보낼 수 있음

 */
const request = require('supertest');
const express = require('express');

/**
 * 테스트용 express 서버를 만든다.
 */
const app = express();
/**
 * /로 요청이 들어오면 헬로우 월드를 응답해줌
 * 이거를 테스트할거다 유닛 테스트인듯
 */
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

/**
 * 테스트 묶음
 * Jest에서 describe는 테스트 코드를 묶는 행위 GEt / 요청이라는 것을 묶는 행
 */
describe('GET /', () => {
  it('should return Hello, World!', async () => {
    /**
     * express에 get /요청을 보냄 res에 응답을 저장함
     * supertest가 내부적으로 처리하게됨 서버가 필요가 없음.
     */
    const res = await request(app).get('/');
    /**
     * 응답코드 및 응답 내용 확인
     */
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, World!');
  });
});

/**
 * 그니까 요청을 임의로 테스트하고(통합 테스트인것같아 내느낌에는) 아래에는 테스트코드를 describe로 묶어서 200ㅇ의 응답 코드와 응답 내용을비교하는거구나
 */