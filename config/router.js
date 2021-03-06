var AppConfig = require('./config')
var baseUrl = AppConfig.getApiBaseUrl()
module.exports = function (app) {
    // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
    var user = require('../api/user/router');
    app.use(`${baseUrl}/user`, user);
};