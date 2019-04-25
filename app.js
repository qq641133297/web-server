var express = require('express')
var app = express()
// 路由配置
var routes = require('./config/router');
routes(app);

console.log(
  'Web server has started.\nPlease log on http://127.0.0.1:3001/index.html'
)

app.listen(3001)