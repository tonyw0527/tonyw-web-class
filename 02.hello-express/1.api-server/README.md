# Api Server

- 클라이언트와 서버 사이의 기본적인 통신
- 이 강의에서 클라이언트는 axios, 서버는 express를 사용하여 통신하는 법을 요약해 놓았습니다.

## 클라이언트에서 api 요청 보내기
- axios 라이브러리를 사용하여 요청을 보내는 방법입니다.
- get 메소드는 서버로부터 정보를 조회하기 위해 설계되었으며 URL을 사용하여 요청을 보냅니다. 이 때 'query string'을 포함하여 파라미터값을 포함해 요청을 보낼 수 있습니다.
- post 메소드는 리소스를 생성/변경하기 위해 설계 되었으며 전송할 데이터를 HTTP 메세지의 'body'에 담아서 전송합니다.
```sh
// get
axios.get('/users')
.then(res => {
    const dataFromApiServer = res.data;
})

// get with query string
axios.get('/user?name=tonyw&lang=ko')
.then(res => {
    const dataFromApiServer = res.data;
})

// post
axios.post('/user-info', {
    name: 'tonyw',
    lang: 'ko
})
```

## 데이터 참조 요약
- 클라이언트 res.data (get, post 메소드에 대한 응답을 받음)
- 서버 req.query (get 메소드에 대한 요청을 받음 - get 메소드는 파라미터를 query에 담아 전달)
- 서버 req.body (post 메소드에 대한 요청을 받음 - post 메소드는 데이터를 body에 담아 전달)