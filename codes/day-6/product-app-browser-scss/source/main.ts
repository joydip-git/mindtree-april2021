import { addProduct, showProducts } from "./manager/productManager";
// import './styles.scss'

import dellImg from './images/dell.png'
import onePlusImg from './images/oneplus_mobile.jpeg'

// document.onmouseover = function () {
//     const buttons = document.getElementsByTagName('button')
//     buttons[0].addEventListener('click', loadData, false)
//     //console.log(buttons[0])

//     //function expression
//     // const loadData = function () {

//     //function declaration
//     function loadData() {
let statusOne = addProduct({ name: 'dell xps', code: 'dell-1111', price: 67000, rating: 4.5, imagePath: dellImg })
console.log(statusOne)

let statusTwo = addProduct({ name: 'One Plus', code: 'op-1112', price: 39000, rating: 4.2, imagePath: onePlusImg })
console.log(statusOne)


showProducts()
//     }
// }
