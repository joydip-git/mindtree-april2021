const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: String,
    email: String,
    phone: Number
})

const contactModel = mongoose.model('contact', contactSchema, 'contacts')
module.exports = { contactModel }