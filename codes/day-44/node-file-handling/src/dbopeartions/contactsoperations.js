const fs = require('fs')
const filePath = './src/data/contacts.json'

const readContacts = (callback) => {
    fs.readFile(filePath, callback)
}
const writeContact = (data, callback) => {
    fs.writeFile(filePath, data, callback)
}

module.exports = {
    readContacts,
    writeContact
}