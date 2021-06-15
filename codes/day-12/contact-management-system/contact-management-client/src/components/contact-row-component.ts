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
export class ContactRowComponent extends HTMLElement {
    private contact: Contact;
    constructor() {
        super()
        this.contact = null
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.shadowRoot.appendChild(contactTemplate.content.cloneNode(true))
        if (this.contact !== null) {
            this.shadowRoot.querySelector('img').setAttribute('src', this.contact.photo)
            this.shadowRoot.getElementById('tdName').innerHTML = this.contact.name
            this.shadowRoot.getElementById('tdEmail').innerHTML = this.contact.email
            this.shadowRoot.getElementById('tdPhone').innerHTML = this.contact.phone.toString()
        }
    }
    public set Contact(value: Contact) {
        this.contact = value
    }
    public get Contact(): Contact {
        return this.contact
    }
}