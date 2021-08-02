const { contactModel } = require('../db/models/contactmodel')

const insertContact = (contactObj) => {
    return new Promise(
        (resolve, reject) => {
            contactModel.findOne({ phone: contactObj.phone }, (err, data) => {
                if (err) {
                    reject(err)
                    return;
                }
                if (data) {
                    reject('record exists')
                    return;
                }
                const newContact = new contactModel(contactObj)
                newContact.save((error, res) => {
                    if (error) {
                        reject(error)
                        return;
                    }
                    resolve(res)
                })
            })
        }
    )
}
const modifyContact = (contactObj) => {
    return new Promise(
        (resolve, reject) => {
            contactModel.findOne(
                { phone: contactObj.phone },
                (err, data) => {
                    if (err) {
                        console.error(err)
                        reject(err)
                        return;
                    }
                    if (data) {
                        console.info(data)
                        contactModel.replaceOne(
                            { phone: contactObj.phone },
                            contactObj,
                            {},
                            (error, res) => {
                                if (error) {
                                    console.error(error)
                                    reject(error)
                                    return;
                                }
                                console.log(res)
                                resolve(res)
                            })
                    } else {
                        reject('no record found to modify')
                    }
                })
        }
    )
}
const removeContact = (phone) => {
    return new Promise(
        (resolve, reject) => {
            contactModel.findOne(
                { phone: phone },
                (err, data) => {
                    if (err) {
                        reject(err)
                        return;
                    }

                    if (!!data) {
                        contactModel.deleteOne({ phone: phone },
                            (error, res) => {
                                if (error) {
                                    reject(error)
                                    return;
                                }
                                resolve(res)
                            }
                        )
                    } else {
                        reject('no record found to delete')
                    }
                })
        }
    )
}
const fetchContacts = () => {
    return new Promise(
        (resolve, reject) => {
            contactModel.find((err, data) => {
                if (!data)
                    reject('no records found')

                if (data)
                    resolve(data)
            })
        }
    )
}
const fetchContactByPhone = (phone) => {
    return new Promise(
        (resolve, reject) => {
            contactModel.findOne(
                { phone: phone },
                (err, data) => {
                    if (!data)
                        reject('no record found with phone no ' + phone)

                    if (!!data)
                        resolve(data)
                })
        }
    )
}

module.exports = {
    insertContact,
    modifyContact,
    removeContact,
    fetchContactByPhone,
    fetchContacts
}