// import { getAlternateTemplate, getMainTemplate } from "./resturant-card.design"

const cardTemplate = document.createElement('template')
cardTemplate.innerHTML = `
    <div>
        <h3></h3>
        <div>
            <p id='location'></p>
            <p id='rating'></p>
        </div>
    </div>
`
const alternateCardTemplate = document.createElement('template')
alternateCardTemplate.innerHTML = `
    <div>
      No records...
    </div>
`

export class ResturantCard extends HTMLElement {
    mainTemplate: HTMLTemplateElement;
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true))
    }
    connectedCallback() {

        const resObj = JSON.parse(this.getAttribute('resturant'))
        //let resObj = undefined
        if (resObj) {
            this.shadowRoot.querySelector('h3').innerText = resObj.name
            this.shadowRoot.getElementById('location').innerText = resObj.location
            this.shadowRoot.getElementById('rating').innerText = resObj.rating.toString()
        } else {
            this.shadowRoot.replaceChild(cardTemplate.content.cloneNode(true), alternateCardTemplate.content)
        }
    }
}