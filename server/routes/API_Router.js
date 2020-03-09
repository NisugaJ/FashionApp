const express = require('express')

const UserController = require('../controllers/UserController')

const router = express.Router()

router.post('/user', UserController.createUser)
// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
// router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/users', UserController.getUsers)

module.exports = router