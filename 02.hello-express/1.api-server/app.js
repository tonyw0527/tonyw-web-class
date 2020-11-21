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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} now!`);
});