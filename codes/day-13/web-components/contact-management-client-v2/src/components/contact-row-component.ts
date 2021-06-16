import { Contact } from "../models/contact.model"
export class ContactRowComponent extends HTMLElement {
    private contactInfo: Contact;
    constructor() {
        super()
    }
    static get obseredAttributes() {
        return ['Contact']
    }
    public set Contact(value: string) {
        this.setAttribute('Contact', value)
    }
    public get Contact(): string {
        return this.getAttribute('Contact')
    }
    connectedCallback() {
        if (this.Contact !== null && this.Contact !== '') {
            this.contactInfo = <Contact>JSON.parse(this.Contact);
            let rowDesign = this.render()
            //this.parentNode.appendChild(rowDesign.content.cloneNode(true))
            this.parentNode.appendChild(rowDesign.cloneNode(true))
        }
    }
    private render(): HTMLElement {
        // const rowTemplate = document.createElement('template')
        // rowTemplate.innerHTML = `
        //     <tr>
        //         <td>
        //             <div class='img-responsive'>
        //                 <img src='${this.contactInfo.photo}' alt='NA' style='width:50px;margin:2px'>
        //             </div>
        //         </td>
        //         <td>${this.contactInfo.name}</td>
        //         <td>${this.contactInfo.email}</td>
        //         <td>${this.contactInfo.phone.toString()}</td>
        //     </tr>
        //  `
        // return rowTemplate

        const rowElement = document.createElement('tr')
        const tdImage = document.createElement('td')
        //tdImage.appendChild(imgElement)
        tdImage.innerHTML = `<div class='img-responsive'><img src='${this.contactInfo.photo}' alt='NA' style='width:50px;margin:2px'></div>`

        const tdName = document.createElement('td')
        tdName.innerText = this.contactInfo.name

        const tdEmail = document.createElement('td')
        tdEmail.innerText = this.contactInfo.email

        const tdPhone = document.createElement('td')
        tdPhone.innerText = this.contactInfo.phone.toString()

        rowElement.append(tdImage, tdName, tdEmail, tdPhone)
        return rowElement;
    }
}