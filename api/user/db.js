var MongoDB = require('../../config/mongodb')
const TABLE = 'user'
var userDB = function () {}
userDB.prototype.createUser = function (user) {
    var req = new Promise(function (resolve, reject) {
        MongoDB.save(TABLE, {
            username: user.username,
            password: user.password,
            createTime: new Date().getTime()
        }, (err, res) => {
            if (err) {
                reject(new Error(err))
            } else {
                resolve()
            }
        })
    })
    return req;
}

userDB.prototype.findUserByName = function (username) {
    var req = new Promise(function (resolve, reject) {
        MongoDB.findOne(TABLE, {
            username: username
        }, (err, res) => {
            if (err) {
                reject(new Error(err))
            } else {
                resolve(res)
            }
        })
    })
    return req
}
userDB.prototype.updateUser = function (username, option) {
    var req = new Promise(function (resolve, reject) {
        MongoDB.findOne(TABLE, {
            username: username
        }, option, (err, res) => {
            if (err) {
                reject(new Error(err))
            } else {
                resolve()
            }
        })
    })
    return req
}
userDB.prototype.deleteUser = function (username) {
    var req = new Promise(function (resolve, reject) {
        MongoDB.remove(TABLE, {
            username: username
        }, (err, res) => {
            if (err) {
                reject(new Error(err))
            } else {
                resolve()
            }
        })
    })
    return req
}
module.exports = new userDB();