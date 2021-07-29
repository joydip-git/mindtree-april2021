const { readContacts, writeContact } = require("../dbopeartions/contactsoperations")

const addContact = (newContactObj) => {
    return new Promise(
        //executor function to whom JS will pass another two callbacks: function to update Promise to fulfilled state and function to update Promise to rejected state (Initially Promise will be in pending state)
        (resolve, reject) => {
            readContacts((err, data) => {
                if (err) {
                    reject(err)
                }

                if (data) {
                    let records = JSON.parse(data)
                    let exists = records.find(c => c.phone === newContactObj.phone)
                    if (!exists) {
                        records.push(newContactObj)
                        writeContact(
                            JSON.stringify(records),
                            () => console.log('written')
                        )
                    } else {
                        reject('contact already exists')
                    }
                    resolve('contact added successfully')
                }
            })
        }
    )
}
const deleteContact = (phoneNo) => {

}
const updateContact = (updatedContactObj) => {

}
const getContacts = () => {
    return new Promise(
        (resolve, reject) => {
            readContacts((err, data) => {
                if (err)
                    reject(err)
                if (data) {
                    resolve(JSON.parse(data))
                }
            })
        }
    )
}
const getContact = (phoneNo) => {

}

module.exports = {
    addContact,
    deleteContact,
    updateContact,
    getContacts,
    getContact
}