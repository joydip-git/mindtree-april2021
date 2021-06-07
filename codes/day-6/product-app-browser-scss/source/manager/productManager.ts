import { products } from "../data/productRepository";
import { IProduct } from "../models/product.model";

export const addProduct = (newProduct: IProduct) => {
    let found: IProduct;
    let status = false;
    if (products.length > 0) {
        found = products.find((p) => {
            return p.code === newProduct.code
        })
    }

    if (found === undefined || products.length === 0) {
        products.push(newProduct)
        status = true;
    }
    return status;
}

export const showProducts = () => {

    const tbody = document.getElementById('productTBody')

    if (products.length > 0) {
        products.forEach(function (p) {
            const row = document.createElement('tr');

            const productImage = document.createElement('img')
            productImage.setAttribute('src', p.imagePath)
            productImage.setAttribute('alt', 'NA')
            productImage.setAttribute('style', 'margin:5px;width:50px')

            const tdImage = document.createElement('td')
            tdImage.appendChild(productImage)

            const tdName = document.createElement('td')
            tdName.innerText = p.name

            const tdCode = document.createElement('td')
            tdCode.innerText = p.code

            const tdPrice = document.createElement('td')
            tdPrice.innerText = p.price.toString()

            const tdRating = document.createElement('td')
            tdRating.innerText = p.rating.toString()

            row.append(tdImage, tdName, tdCode, tdPrice, tdRating)
            tbody.appendChild(row)
        })
    }
}