const { fetchContacts, fetchContactByPhone, removeContact, modifyContact, insertContact } = require("../manager/contactManager")

const addContactHandler = (req, res) => {
    let contactObj = req.body
    // console.log(contactObj)
    insertContact(contactObj)
        .then(
            (data) => {
                res.statusCode = 200
                res.send(data)
            },
            (err) => {
                res.statusCode = 404
                res.send(err)
            }
        )
}

const updateContactHandler = (req, res) => {
    let contactObj = req.body
    console.log(contactObj)
    modifyContact(contactObj)
        .then(
            (data) => {
                res.statusCode = 200
                res.send(data)
            },
            (err) => {
                res.statusCode = 404
                res.send(err)
            }
        )
}

const deleteContactHandler = (req, res) => {
    let phone = parseInt(req.params.phone)
    //console.log(phone)
    removeContact(phone)
        .then(
            (data) => {
                res.statusCode = 200
                res.send('record deleted')
            }, (err) => {
                res.statusCode = 404
                res.send(err)
            }
        )
    res.send(JSON.stringify(deletedRecord))
}

const getContactsHandler = (req, res) => {
    fetchContacts()
        .then(
            (records) => {
                res.statusCode = 200
                res.send(JSON.stringify(records))
            },
            (err) => {
                res.statusCode = 201
                res.send(err)
            }
        )

}

const getContactHandler = (req, res) => {
    let phone = parseInt(req.params.phone)
    // console.log(phone)
    fetchContactByPhone(phone)
        .then(
            (record) => {
                res.statusCode = 200
                res.send(JSON.stringify(record))
            },
            (err) => {
                res.statusCode = 201
                res.send(err)
            }
        )
}

module.exports = {
    addContactHandler,
    updateContactHandler,
    deleteContactHandler,
    getContactHandler,
    getContactsHandler
}