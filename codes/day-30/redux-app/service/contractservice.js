const Axios = require('axios')

const url = 'http://localhost:3001/contacts'

const getContacts = () => {
    return Axios.get(url)
}

module.exports = {
    getContacts
}