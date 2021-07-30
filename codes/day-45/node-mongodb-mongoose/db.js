const mongoose = require('mongoose')
//const Schema = mongoose.Schema;

mongoose.connect(
    'mongodb://localhost:27017/contactdb',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
/*
const contactsSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String
})

const contactsModel = mongoose.model('Contact', contactsSchema, 'contacts')
//Contact=>contacts
// const newDocument = new contactsModel({ name: 'banu prakash', phone: 9797979797, email: 'banu@gmail.com' })
// newDocument.save()

//contactsModel.deleteMany({ name: 'banu prakash' })
//contactsModel.insertMany([{},{}])

show()
function show() {
    contactsModel.find((err, records) => {
        console.log('all records\n----------------------')
        console.log(records)
    })
}

//mongoose.connection.close()
*/

const sampleSchema = mongoose.Schema({ name: String, salary: Number })
const sampleModel = mongoose.model('sample', sampleSchema, 'samples')
// sampleModel.createCollection()
const newSample = new sampleModel({ name: 'joydip', salary: 1000 })
newSample.save()
sampleModel.find(
    (err, records) => {
        console.log(records)
    }
)


