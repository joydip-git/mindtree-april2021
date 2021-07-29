function readCallback(err, data) {
    if (err)
        console.log(err)
    if (data)
        console.log(data.toString())
}
fs.readFile('./data.txt', readCallback)
console.log('reading operation is in progress...output will be printed shortly...')

/**
 * const fs = require('fs')


function addContact() {
    const newContact = {
        name: 'Saad',
        phone: 9090909094,
        email: 'saad@gmail.com'
    }
    fs.readFile('./contacts.json', (err, data) => {
        if (err)
            console.log(err)
        if (data) {
            let records = JSON.parse(data)
            let exists = records.find(c => c.phone === newContact.phone)
            if (!exists) {
                records.push(newContact)
                fs.writeFile('./contacts.json', JSON.stringify(records), () => {
                    console.log('written properly...')
                })
            } else
                console.log('the record exists')
        }
    })
}

addContact()

setTimeout(() => {
    function readContactsCallback(err, data) {
        if (err)
            console.log(err)
        if (data)
            console.log(JSON.parse(data))
    }
    fs.readFile('./contacts.json', readContactsCallback)
}, 1000)


 */