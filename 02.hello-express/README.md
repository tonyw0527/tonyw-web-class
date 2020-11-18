# 02 - Hello Express

## express 프로젝트 시작하기
```sh
$ mkdir [프로젝트명]
$ cd [프로젝트명]
$ npm init -y
$ yarn add express
$ yarn add nodemon -D
```
- vim이나 visual studio code를 통해 app.js 생성
- 가장 기본적인 서버 작성
```sh
const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} now!`);
});
```
- 실행
```sh
$ node app.js    // 가장 일바적인 실행 방법
$ nodemon app.js    // nodemon으로 실행하면 app.js나 그 안에서 불러온 모듈파일을 변경하여 저장할때 바로 변경사항을 반영하여 재실행해준다.
```
- 종료는 'control + z'로 종료한다.