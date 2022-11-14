// We import the Model to communicate with the Database
const Product = require('../models/Product')

async function getAllProducts(req,res) {
    const allProducts = await Product.find()
    res.json(allProducts)
}

async function createProduct(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(err))
    
    // Method 2
    // await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

// update tweet function
async function updateProduct(req,res) {
    // Method 1
    // let tweet = await Tweet.findById(req.params._id)
    // tweet.name = req.body.name
    // tweet.content = req.body.content
    // await tweet.save()
    // Method 2
    // await Tweet.findByIdAndUpdate(req.params._id, req.body)
    // Method 3
    // await Tweet.findByIdAndUpdate(req.params._id, {
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // res.json({
    //     message: 'Tweet updated successfully'
    // })
    // let updateTweet = await Tweet.findByIdAndUpdate(
    //     req.params._id, req.body
    //     )
    //     res.status(200).json({message: 'Tweet updated successfully'})
    try {
        let updateProduct = await Product.findByIdAndUpdate(req.params._id, req.body)
        res.status(200).json({message: 'Product updated successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'Product not updated'})
    }
}

async function deleteProduct(req,res) {
    // Method 1
    // let tweet = await Tweet.findById(req.params._id)
    // await tweet.remove()
    // Method 2
    // await Tweet.findByIdAndRemove(req.params._id)
    // res.json({
    //     message: 'Tweet deleted successfully'
    // })
    try {
        let deletedProduct = await Product.findByIdAndRemove(req.params._id)
        res.status(200).json({message: 'Product deleted successfully'})
    }
    catch(err) {
        res.status(500).json({message: 'Product not deleted'})
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}