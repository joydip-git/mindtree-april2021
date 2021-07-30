const { readFile } = require("fs")

const readContacts = (callback) => {
    readFile('./contacts.json', callback)
}
module.exports = {
    readContacts
}