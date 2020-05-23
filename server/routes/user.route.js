const express = require('express')

const UserController = require('../controllers/UserController')

const Utils = require("../common/CommonUtils")
const Definitions = require("../definitions/Defs").Definitions
const router = express.Router()

router.post('/create', UserController.createUser)
router.get('/all', Utils.authenicateToken(Definitions.clientTypes.admin), UserController.getUsers)

module.exports = router