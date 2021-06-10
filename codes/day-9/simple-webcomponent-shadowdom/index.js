const userCardTemplate = document.createElement('template')
userCardTemplate.innerHTML = `
    <style>
    .regular{
        background-color:azure
    }
    .irregular{
         background-color:Lime
    }
    </style>
    <div>
        <h3></h3>
        <div>
            <p></p>
            <p></p>
        </div>
        <button>Apply Style</button>
        <br/>
        <button id='btnSelect'>Select</button>
    </div>
`
class UserCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'email', 'phone', 'onselected']
    }
    constructor(name) {
        console.log('user-card created')
        super()
        // this.name = name;
        // this.email = ''
        // this.mobile = 0
        this.attachShadow({ mode: 'open' })
        this.toggleStyle = false;
        // this.shadowRoot.appendChild(userCardTemplate.content.cloneNode(true))
    }
    set userName(value) {
        this.setAttribute('name', value)
    }
    get userName() {
        return this.getAttribute('name')
    }
    set userEmail(value) {
        this.setAttribute('email', value)
    }
    get userEmail() {
        return this.getAttribute('email')
    }
    set userPhone(value) {
        this.setAttribute('phone', value)
    }
    get userPhone() {
        return this.getAttribute('phone')
    }
    connectedCallback() {
        //console.log(this.isConnected)
        console.log('user-card connected to DOM')
        //getting some data from database async
        this.shadowRoot.appendChild(userCardTemplate.content.cloneNode(true))
        let n = this.getAttribute('name')
        console.log(n)
        this.updateTemplate(n)
        let btn = this.shadowRoot.querySelector('button')
        btn.addEventListener('click', () => {
            this.toggleStyle = !this.toggleStyle
            if (this.toggleStyle) {
                btn.innerText = 'Regular Style'
                btn.className = 'regular'
            } else {
                btn.innerText = 'Irregular Style'
                btn.className = 'irregular'
            }
        })
        this.shadowRoot.getElementById('btnSelect').addEventListener('click', () => {
            let selectedEvent = new CustomEvent('selected', {
                detail: { name: this.getAttribute('name'), message: 'Hello from user-card' },
                bubbles: true
            })
            this.dispatchEvent(selectedEvent)
        })
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attribute value received')
        console.log(`${name} attribute value has changed from ${oldValue} to ${newValue}`)
        console.log(this.isConnected)
        if (newValue !== oldValue && this.shadowRoot.children.length > 0)
            this.updateTemplate(newValue)

        // if (name === 'onselected') {
        //     newValue()
        // }
    }
    updateTemplate(value) {
        console.log('called')
        this.shadowRoot.querySelector('h3').innerText = value
    }
    disconnectedCallback() {
        console.log('removed')
    }
}
window.customElements.define('user-card', UserCard)

//const userCardElement1 = new UserCard()
//at this moment the element is not conncted to the DOM
//you are passing value through property which will set the attribute also and call attributeChangedCallback
//remember don' try to manipualte the template now since it might not have been appended in the shadow root
// userCardElement1.userName = 'anil'
// document.body.appendChild(userCardElement1)
//now it is connected to DOM

// setTimeout(() => {
//     // document.querySelector('user-card').setAttribute('name', 'joydip')
//     let card = document.querySelector('user-card')
//     card.userName = 'Joy'
// }, 3000)


// const userCardElement2 = new UserCard('sunil')
// document.body.appendChild(userCardElement2)

const cardsTemaplate = document.createElement('template')
// cardsTemaplate.innerHTML = `
//       <user-card></user-card>
// `
class CardsComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        // this.shadowRoot.appendChild(cardsTemaplate.content.cloneNode(true))
        let cardNames = ['joydip', 'anil']
        // this.shadowRoot.querySelector('user-card').setAttribute('name', cardName)
        cardNames.forEach(cn => {
            cardsTemaplate.innerHTML += `
            <user-card name='${cn}'>
            </user-card>
            `
        })
        this.shadowRoot.appendChild(cardsTemaplate.content.cloneNode(true))
        let all = this.shadowRoot.childNodes;
        all.forEach(node => {
            if (node.nodeName === 'USER-CARD') {
                node.addEventListener('selected', this.cardSelected)
            }
        })
        // .forEach(ele => {
        //     console.log(ele)
        //     if (ele.localName === 'user-card') {
        //         ele.addEventListener('selected', this.cardSelected)
        //     }
        // })
        // let cardName = 'Joydip'
        // cardsTemaplate.innerHTML = `
        // <user-card name='${cardName}'></user-card>`
        // this.shadowRoot.appendChild(cardsTemaplate.content.cloneNode(true))

        // this.shadowRoot.querySelector('user-card').addEventListener('selected', this.cardSelected)
    }
    cardSelected(event) {
        console.log('selected this card ')
        console.log(event.detail)
    }
}
window.customElements.define('user-cards', CardsComponent)

setTimeout(() => {
    // document.querySelector('user-card').setAttribute('name', 'joydip')
    let cards = document.querySelector('user-cards')
    let card = cards.shadowRoot.querySelector('user-card')
    //console.log(card)
    card.userName = 'Joy'
}, 3000)