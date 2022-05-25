'use strict'
const config = require('./config')
const Mongoose=require('mongoose').connect(config.dbURI)


// log an error if connection fails
Mongoose.connection.on('error',error=>{
    console.log('DB Connection error',error)
})

// module.exports={
//     Mongoose.
// }