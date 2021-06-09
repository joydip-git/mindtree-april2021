import { ResturantCard } from "./components/resturant-card/resturant-card.code";
import { ResturantCards } from "./components/resturant-cards/resturant-cards.code";

window.customElements.define('rest-card', ResturantCard)
window.customElements.define('res-cards', ResturantCards)

// document.getElementById('btnShow').addEventListener(
//     'click',
//     function () {
//         document.querySelector('body').innerHTML += `<br/>
//         <res-cards></res-cards>`
//     }
// )
// document.getElementById('btnRemove').addEventListener(
//     'click',
//     function () {
//         document.querySelector('res-cards').remove()
//     }
// )

// document.querySelector('body').innerHTML += `<br/>
//         <res-cards></res-cards>`

document.getElementById('root').innerHTML += `<br/>
        <res-cards></res-cards>`