const mongoose =require('mongoose')
const Schema = mongoose.Schema
//Creating our Tweet Schema
const UserModel = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    Products: [{type: Schema.Types.ObjectId, 
        ref: 'Product'}],
    createdAt: {type: Date, default: Date.now},
}, { timestamps: true });
//Storing our Schema as a model
const User = mongoose.model('User', UserModel)
// Exporting our Model
module.exports = User;