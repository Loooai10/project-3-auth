const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/products')
// We import our controller functions above

//Require isloggedIn Middleware.
const isloggedIn = require('../helper/isloggedIn')

// We define the routes and controllers
router.get('/products', isloggedin,productsController.getAllProducts)
router.get('/products/:_id', productsController.getAllProducts)

router.post('/products',isloggedIn, productsController.createProduct)

//route to update a tweet
//router.put('/tweets/:id', tweetsController.updateTweet)
router.put('/products/:_id', productsController.updateProduct)

//route to delete a tweet
//router.delete('/tweets/:id', tweetsController.deleteTweet)
router.delete('/products/:_id', productsController.deleteProduct)

// We export our routes 
module.exports = router
