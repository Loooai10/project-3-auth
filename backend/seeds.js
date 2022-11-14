require('dotenv').config()
require('./config/database')
const Product = require('./models/Product')

Product.insertMany([
    {
        name:'Hussain',
        Discription:'I get red text aroud name and content',
        size:'S',
        price: '5BD'
    },
    { 
        name:'Mohd',
        Discription: 'Hello World',
        size:'M',
        price:'10BD',

    },
    {
        name: 'Kareem',
        Discription: 'Hi guys',
        size:'L',
        price: '123BD',
    },
])
.then(() => console.log('Data added sucessfully!'))
.catch(err => console.log(err))