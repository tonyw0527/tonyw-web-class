const express = require('express');
const app = express();
const PORT = 3002;

// 루트경로('/')에 접근시 index.html 파일 전송
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

// 데이터 전송
app.get('/obj', (req, res) => {
    res.send({name: 'tonyw'});
})

// 상태코드와 함께 데이터 전송
app.get('/status', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'good'
    })
})

// json 파일 전송
app.get('/json', (req, res) => {
    const myJson = [
        {"key":"value"},
        {"key2":"value2"}
    ];
    res.json(myJson);
});

// 클라언트로부터 query string 처리
app.get('/bible', (req, res) => {
    // 요청 URL '/bible?book=1&chapter=3'
    const { book, chapter} = req.query;
    res.send(`From api server - requested params ${book} and ${chapter}`);
})


// use 메소드 - http 메소드 종류에 상관없이 첫번쨰 인자로 api가 들어가는 모든 경로에 대해 실행. next로 해당 경로와 일치는 메소드 실행
// ex) /api/user, /api/say/hello 등등
app.use('/api', (req, res , next) => {
    console.log('hi');
    next();
})

// 위에서 next();를 작성한 경우 아래 메소드 실행됨
app.get('/api/hello', (req, res) => {
    console.log('hello');
})

// all 메소드 - use처럼 http 메소드 종류에 상관없이 실행되지만 입력된 경로와 정확히 일치하는 경우만 실행된다.
// ex) /api 에 대해서만 실행.
app.all('/api', (req, res) => {

});





app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} now!`);
});