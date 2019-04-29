var express = require('express')
var router = express.Router()
var userDB = require('./db')

router.use(function timeLog(req, res, next) {
  //用户校验
  next()
})
router.post('/login', function(req, res) {
  var user = req.body
  console.log(user.username)
  userDB
    .findUserByName(user.username)
    .then(dbres => {
      console.log(dbres.password, '\n', user.password)
      if (dbres && dbres.password == user.password) {
        res.status(200).json({
          code: 200,
          msg: '登录成功！'
        })
      } else {
        res.status(400).json({
          code: 400,
          msg: '账号或密码不正确！'
        })
      }
    })
    .catch(err => {
      console.error(err)
    })
})
router.post('/register', function(req, res) {
  var user = req.body
  userDB
    .findUserByName(user.username)
    .then(dbres => {
      if (dbres) {
        res.status(400).json({
          code: 401,
          msg: '用户名已存在'
        })
      } else {
        userDB
          .createUser(req.username)
          .then(dbres => {
            res.status(200).json({
              code: 200,
              msg: '注册成功'
            })
          })
          .catch(err => {
            res.status(400).json({
              code: 402,
              msg: '注册失败'
            })
          })
      }
    })
    .catch(err => {
      console.error(err)
    })
})
router.post('/edit', function(req, res) {})
router.post('/delete', function(req, res) {})
router.get('/userlist', function(req, res) {
  userDB
    .searchTalent()
    .then(dbres => {
      res.status(200).json({
        code: 200,
        msg: '获取成功！',
        userList: dbres
      })
    })
    .catch(err => {
      console.error(err)
    })
})
module.exports = router
