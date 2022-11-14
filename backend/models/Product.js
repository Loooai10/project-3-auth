const mongoose = require('mongoose')

const Schema = mongoose.Schema
// create our tweet schema
const ProductModel = new Schema({
    name: {type: String, required: true},
    Discription: {type: String, required: true},
    Size: {type: String, required: true},
    Price: {type: String, require: true}
},{
    timestamps: true

})
//Storing our Schema as a model
const Product = mongoose.model('Product', ProductModel)
// Exporting our Model
module.exports = Product;
