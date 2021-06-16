import { Contact } from "../models/contact.model"

export class ContactRowComponent {
    private contact: Contact;
    constructor() {
        this.contact = null
    }
    public set Contact(value: Contact) {
        this.contact = value
    }
    public get Contact(): Contact {
        return this.contact
    }
    public render(): HTMLElement {
        const rowElement = document.createElement('tr')

        if (this.contact !== null) {
            // const imgElement = document.createElement('img')
            // imgElement.src = this.contact.photo
            // imgElement.alt = 'NA'
            // imgElement.setAttribute('style', 'width:50px;margin:2px')

            const tdImage = document.createElement('td')
            //tdImage.appendChild(imgElement)
            tdImage.innerHTML = `<div class='img-responsive'><img src='${this.contact.photo}' alt='NA' style='width:50px;margin:2px'></div>`

            const tdName = document.createElement('td')
            tdName.innerText = this.contact.name

            const tdEmail = document.createElement('td')
            tdEmail.innerText = this.contact.email

            const tdPhone = document.createElement('td')
            tdPhone.innerText = this.contact.phone.toString()

            rowElement.append(tdImage, tdName, tdEmail, tdPhone)
        }

        return rowElement
    }
}