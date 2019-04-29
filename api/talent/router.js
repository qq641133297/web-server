var express = require('express')
var router = express.Router()
var talentDB = require('./db')

router.use(function timeLog(req, res, next) {
  //用户校验
  next()
})
router.post('/add', function(req, res) {
  var talent = req.body
  talentDB
    .findTalentById(talent.name)
    .then(dbres => {
      if (dbres) {
        res.status(400).json({
          code: 401,
          msg: '天赋已存在!'
        })
      } else {
        talentDB
          .createUser(req.username)
          .then(dbres => {
            res.status(200).json({
              code: 200,
              msg: '添加成功！'
            })
          })
          .catch(err => {
            res.status(400).json({
              code: 402,
              msg: '添加失败！'
            })
          })
      }
    })
    .catch(err => {
      console.error(err)
    })
})
router.post('/edit', function(req, res) {
  var talent = req.body
  talentDB
    .updateTalent(talent.id, talent)
    .then(dbres => {
      res.status(200).json({
        code: 200,
        msg: '修改成功！'
      })
    })
    .catch(err => {
      res.status(400).json({
        code: 402,
        msg: '修改失败！'
      })
    })
})
router.post('/delete', function(req, res) {})
router.get('/talentlist', function(req, res) {
  talentDB
    .search()
    .then(dbres => {
      res.status(200).json({
        code: 200,
        msg: '获取成功！',
        talentList: dbres
      })
    })
    .catch(err => {
      console.error(err)
    })
})
module.exports = router
