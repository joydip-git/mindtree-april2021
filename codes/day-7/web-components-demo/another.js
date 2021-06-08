class Another extends HTMLElement {
    constructor() {
        super()

        //design
        const helloSpan = document.createElement('span')
        helloSpan.innerHTML = '<b>Hi everyone<b>'

        //style
        // const helloStyle = document.createElement('style')
        // helloStyle.textContent = `
        // span{
        //     background-color:azure;
        //     font-size:medium;
        //     font-family:consolas;
        //     border:1px solid black;
        //     border-radius:3px;
        //     width:200px
        // }
        // `
        //shadow root
        const helloShadow = this.attachShadow({ mode: 'open' })
        //helloShadow.append(helloStyle, helloSpan)
        helloShadow.appendChild(helloSpan)
    }
}

window.customElements.define('another-span', Another)