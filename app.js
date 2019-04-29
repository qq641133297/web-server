var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// 路由配置
var routes = require('./config/router')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

routes(app)

console.log(
  'Web server has started.\nPlease log on http://127.0.0.1:3001/index.html'
)

app.listen(3001)
