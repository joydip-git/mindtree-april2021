class Hello extends HTMLElement {
    constructor() {
        super()

        //design
        const helloSpan = document.createElement('span')
        helloSpan.innerHTML = '<b>Hello everyone<b>'

        const helloPara = document.createElement('p')
        helloPara.appendChild(helloSpan)

        // const helloStyle = `
        // <style>
        //      span{
        //     background-color:azure;
        //     font-size:medium;
        //     font-family:consolas;
        //     border:1px solid black;
        //     border-radius:3px;
        //     width:200px
        // }
        // </style>
        // `
        // const helloDesign = `
        //     <p>
        //         <span>
        //             Hello everyone
        //         </span>
        //     </p>
        // `

        //style
        const helloStyle = document.createElement('style')
        helloStyle.textContent = `
        span{
            background-color:azure;
            font-size:medium;
            font-family:consolas;
            border:1px solid black;
            border-radius:3px;
            width:200px
        }
        `
        //shadow root
        const helloShadow = this.attachShadow({ mode: 'open' })
        helloShadow.append(helloStyle, helloDesign)
    }
}

window.customElements.define('hello-span', Hello)