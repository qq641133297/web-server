var express = require('express')
var router = express.Router();
var userDB = require('./db')

router.use(function timeLog(req, res, next) {
    //用户校验
})
router.post('/login', function (req, res) {
    userDB.findUserByName(res.username)
        .then(res => {
            
        })
        .catch(err => {
            
        })
})
router.post('/register', function (req, res) {

})
router.post('/edit', function (req, res) {

})
router.post('/delete', function (req, res) {

})
module.exports = router