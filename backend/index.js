const express = require('express')
//import cors
const cors = require('cors')
// Initializing our application
const app = express()

require('dotenv').config()
require('./config/database')

// Mount our middleware
//....
//use cors
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended: false}))
//....
app.use('/', require('./routes/products'))
app.use('/', require('./routes/users'))

// Listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000!')
})