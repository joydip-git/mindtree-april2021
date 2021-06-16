import { Contact } from "../models/contact.model"

export class ContactDetailComponent {
    private contact: Contact;
    constructor() {
        this.contact = null
    }
    public render() {
        const row = document.createElement('tr')
        if (this.contact !== null) {
            const imgTd = document.createElement('td')
            const img = document.createElement('img')
            img.style.width = '50px'
            img.style.margin = '2px'
            img.src = this.contact.photo
            img.alt = 'NA'
            imgTd.append(img)

            const nameTd = document.createElement('td')
            nameTd.innerText = this.contact.name

            const emailTd = document.createElement('td')
            emailTd.innerText = this.contact.email

            const phoneTd = document.createElement('td')
            phoneTd.innerText = this.contact.phone.toString()
            row.append(imgTd, nameTd, emailTd, phoneTd)
            return row;
        }
        return row
    }
    public set Contact(value: Contact) {
        this.contact = value
    }
    public get Contact(): Contact {
        return this.contact
    }
}