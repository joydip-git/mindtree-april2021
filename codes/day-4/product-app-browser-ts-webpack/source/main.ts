import { addProduct, showProducts } from "./manager/productManager";
import './styles.css'

import dellImg from './images/dell.png'
import onePlusImg from './images/oneplus_mobile.jpeg'

let statusOne = addProduct({ name: 'dell xps', code: 'dell-1111', price: 67000, rating: 4.5, imagePath: dellImg })
console.log(statusOne)

let statusTwo = addProduct({ name: 'One Plus', code: 'op-1112', price: 39000, rating: 4.2, imagePath: onePlusImg })
console.log(statusOne)


showProducts()


