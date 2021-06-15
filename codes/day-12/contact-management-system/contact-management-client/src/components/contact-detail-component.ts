import { Contact } from "../models/contact.model"

const contactTemplate = document.createElement('template')
contactTemplate.innerHTML = `
<tr>
    <td id='tdPhoto'>
        <img alt='NA' style='width:50px;margin:2px'>
    </td>
    <td id='tdName'></td>
    <td id='tdEmail'></td>
    <td id='tdPhone'></td>
</tr>
<br/>
`
export class ContactDetailComponent {
    private contact: Contact;
    constructor() {
        this.contact = null
    }
    public render() {
        if (this.contact !== null) {

            contactTemplate.querySelector('img').setAttribute('src', this.contact.photo)
            let tds = contactTemplate.getElementsByTagName('td')
            tds.item(0).innerHTML = this.contact.name
            tds.item(1).innerHTML = this.contact.email
            tds.item(2).innerHTML = this.contact.phone.toString()

        } else {
            contactTemplate.innerHTML = `no records found`
        }
        return contactTemplate
    }
    public set Contact(value: Contact) {
        this.contact = value
    }
    public get Contact(): Contact {
        return this.contact
    }
}