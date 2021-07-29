const { addContact, getContacts } = require("./src/manager/contactsmanager");
//const { contact } = require("./src/models/contact");

// const newContact = new contact('mounika', 9090909096, 'mounika@gmail.com')

// addContact(newContact)
//     .then(
//         (resolveResp) => {
//             console.log(resolveResp)
//         },
//         (rejectResp) => {
//             console.log(rejectResp)
//         }
//     )

getContacts()
    .then(
        (dataResp) => {
            console.log(dataResp)
        },
        (errorResp) => {
            console.log(errorResp)
        }
    )