const mongoose = require('mongoose')
const DB_PATH = 'mongodb://127.0.0.1:27017/contactdb'

const connectdb = () => {
    mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err)
            console.error(err)
        else
            console.info('connected to mongodb')
    })
}

module.exports = { connectdb }