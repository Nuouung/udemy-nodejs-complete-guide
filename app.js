const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'pug'); // 템플릿 엔진은 pug를 쓰겠다.
app.set('views', 'views'); // 동적 리소스는 views 디렉토리에 있다. ex) templates이면 'views', 'templates'

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// 정적으로 파일을 서비스 하기 위한 로직
// public 이하 경로를 외부에 읽기 전용으로 오픈한다.
app.use(express.static(path.join(__dirname, 'public')))

// route를 사용할 때 use, get, post 등을 사용할 수 있는데
// use는 사용하지 말자. (path를 /로 잡으면 / 이하의 모든 경로를 처리함)
// 즉, /hello이던 /bye이던 /가 잡아서 처리하는 것

const fs = require('fs');
app.use('/test/path', (request, response, next) => {

    const array = [];
    const body = request.body;
    array.push(body);

    fs.writeFile('dummy.json', JSON.stringify(array), () => {
        console.log('done');
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError404);

app.listen(3000);