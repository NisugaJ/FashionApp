const express = require('express')

const UserController = require('../controllers/UserController')

const router = express.Router()

router.post('/user', UserController.createUser)
router.get('/users', UserController.getUsers)

module.exports = router