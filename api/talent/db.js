var MongoDB = require('../../config/mongodb')
const TABLE = 'talent'
var talentDB = function() {}
talentDB.prototype.createTalent = function(talent) {
  var req = new Promise(function(resolve, reject) {
    MongoDB.save(
      TABLE,
      {
        name: talent.name,
        talentId: talent.id,
        desc: talent.desc,
        effects: [],
        img: ''
      },
      (err, res) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve()
        }
      }
    )
  })
  return req
}

talentDB.prototype.findTalentById = function(id) {
  var req = new Promise(function(resolve, reject) {
    MongoDB.findOne(
      TABLE,
      {
        talentId: id
      },
      (err, res) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(res)
        }
      }
    )
  })
  return req
}
talentDB.prototype.updateTalent = function(id, option) {
  var req = new Promise(function(resolve, reject) {
    MongoDB.findOne(
      TABLE,
      {
        talentId: id
      },
      option,
      (err, res) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve()
        }
      }
    )
  })
  return req
}
talentDB.prototype.deleteTalent = function(id) {
  var req = new Promise(function(resolve, reject) {
    MongoDB.remove(
      TABLE,
      {
        talentId: id
      },
      (err, res) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve()
        }
      }
    )
  })
  return req
}

talentDB.prototype.searchTalent = function(option) {
  var req = new Promise(function(resolve, reject) {
    MongoDB.find(TABLE, option, (err, res) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(res)
      }
    })
  })
  return req
}

module.exports = new userDB()
