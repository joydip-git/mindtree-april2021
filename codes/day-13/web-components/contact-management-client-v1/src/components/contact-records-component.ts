import { Contact } from "../models/contact.model";
import { ContactService } from "../services/contactservice"
import { ContactRowComponent } from "./contact-row-component";

const contactRecordsTemplate = document.createElement('template')
contactRecordsTemplate.innerHTML = `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<div class='table-responsive'>
<table class='table'>
    <thead style='background-color:burlywood'>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>
`
export class ContactRecordsComponent extends HTMLElement {
    contactSvcRef: ContactService;
    constructor() {
        super()
        this.contactSvcRef = new ContactService()
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.shadowRoot.appendChild(contactRecordsTemplate.content.cloneNode(true))
        this.contactSvcRef.getContacts(this.showData)
    }
    showData = (contacts: Contact[], error: Error) => {
        if (error !== null) {
            console.log(error)
        }
        if (contacts !== null)
            contacts.forEach(c => {

                const contactRow = new ContactRowComponent();

                contactRow.Contact = c;

                this.shadowRoot.querySelector('tbody').appendChild(contactRow.render())
            })
    }
}