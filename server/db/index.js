const mongoose = require('mongoose')
const {
    dbconfig
} = require('../config.js')

mongoose
    .connect(dbconfig.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(e => {
        console.error('DB Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db