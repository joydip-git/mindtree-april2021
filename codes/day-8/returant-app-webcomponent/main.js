const resturants = [{
    name: 'Momo Palace',
    rating: 4.5,
    location: 'bangalore',
    image: ''
}, {
    name: 'Momo Palace',
    rating: 4.5,
    location: 'bangalore',
    image: ''
}]
const cardTemplate = document.createElement('template')
// cardTemplate.innerHTML = `
//     <div>
//         <h3></h3>
//         <div>
//             <p><slot name='loc'/></p>
//             <p><slot name='rating'></p>
//         </div>
//     </div>
// `
cardTemplate.innerHTML = `
    <div>
        <h3></h3>
        <div>
            <p id='location'></p>
            <p id='rating'></p>
        </div>
    </div>
`
/**
 *  
 */
class ResturantCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true))

        //if you are using this component directly
        //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')

        //if this component is nested in another (parent) and the parent supplies the data for this component
        const resObj = JSON.parse(this.getAttribute('resturant'))
        console.log(resObj)
        this.shadowRoot.querySelector('h3').innerText = resObj.name
        this.shadowRoot.getElementById('location').innerText = resObj.location
        this.shadowRoot.getElementById('rating').innerText = resObj.rating.toString()
    }
}
window.customElements.define('rest-card', ResturantCard)

const cardsTemplate = document.createElement('template')
class ResturantCards extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        resturants.forEach(res => {
            let jsonRes = JSON.stringify(res)
            cardsTemplate.innerHTML += `
                <rest-card resturant='${jsonRes}'>
                </rest-card>
            `
        })
        this.shadowRoot.appendChild(cardsTemplate.content.cloneNode(true))
    }
    disconnectedCallback() {
        console.log('disconnected')
    }
    static get observedAttributes() {
        console.log('observing cardValue attribute')
        return ['cardValue']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('called')
    }
}
const customElementsReg = window.customElements;
customElementsReg.define('res-cards', ResturantCards)

function create() {
    document.querySelector('body').innerHTML += `<br/>
    <res-cards></res-cards>`
    // resturants.forEach(res => {
    //     document.querySelector('body').innerHTML += `<br/>
    //     <rest-card name='${res.name}'>
    //         <div slot='loc'>${res.location}</div>
    //         <div slot='rating'>${res.rating.toString()}</div>
    //     </res-card>
    //     `
    // })
}
function remove() {
    document.querySelector('res-cards').remove()
}
function changeValue() {
    // const resCards = document.querySelector('res-cards');
    // const oldval = resCards.getAttribute('cardValue')
    // resCards.setAttribute('cardValue', 'Hi everyone')
    // console.log(resCards.getAttribute('cardValue'))
    // console.log(resCards)
    // resCards.attributeChangedCallback('cardValue', oldval, resCards.getAttribute('cardValue'))
}
