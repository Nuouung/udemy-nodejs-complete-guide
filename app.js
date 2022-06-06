const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

// route를 사용할 때 use, get, post 등을 사용할 수 있는데
// use는 사용하지 말자. (path를 /로 잡으면 / 이하의 모든 경로를 처리함)
// 즉, /hello이던 /bye이던 /가 잡아서 처리하는 것
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);