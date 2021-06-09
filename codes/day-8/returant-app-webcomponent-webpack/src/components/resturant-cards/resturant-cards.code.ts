import { Resturant } from "../../models/restutant";
import { ResturantService } from "../../services/resturantService"

const cardsTemplate = document.createElement('template')

export class ResturantCards extends HTMLElement {

    resturantsArray: Resturant[];
    resturantSvc: ResturantService;

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.resturantSvc = new ResturantService();
    }

    private createTemplate() {
        if (this.resturantsArray.length > 0) {
            this.resturantsArray.forEach(res => {
                let jsonRes = JSON.stringify(res)
                cardsTemplate.innerHTML += `
                <rest-card resturant='${jsonRes}'>
                </rest-card>`
            })
        } else {
            cardsTemplate.innerHTML = `<div>No records in database</div>`
        }
    }
    connectedCallback() {
        this.resturantsArray = this.resturantSvc.getResturants();
        this.createTemplate()
        this.shadowRoot.appendChild(cardsTemplate.content.cloneNode(true))
    }
    disconnectedCallback() {
        console.log('disconnected')
    }
}