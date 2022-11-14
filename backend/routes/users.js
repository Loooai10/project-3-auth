const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const productsController = require('../controllers/products')
//router.get('users', usersController.index)
router.post('/users', usersController.createUser)
// router.post('/auth/signup', usersController.auth_sigin_post)
router.post('/auth/signup', usersController.createUser)
//router.get('/users/:userId/tweets', tweetsController.index)
router.post('/users/:userId/products', usersController.createUserProduct)
router.put('/users/:_id', usersController.updateUser)
router.delete('/users/:_id', usersController.deleteUser)
router.post('/auth/signin', usersController.auth_sigin_post)

module.exports = router

