const express = require('express')
const router = express.Router() // 啟動路由器功能

const db = require('../../models')
const Todo = db.Todo
const User = db.User

router.get('/', (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found!')

      return Todo.findAll({
        raw: true,
        nest: true,
        where: { UserId: req.user.id }
      })
    })
    .then((todos) => res.render('index', { todos }))
    .catch((error) => console.log(error))
})

module.exports = router