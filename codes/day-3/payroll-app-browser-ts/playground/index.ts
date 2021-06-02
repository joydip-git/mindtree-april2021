const add = (a: number, b: number) => (a + b)
const subtract = (a: number, b: number) => a - b

const calculate = (fnRef: (x: number, y: number) => number, arg1: number, arg2: number) => {
    return fnRef(arg1, arg2)
}

console.log(calculate(add, 10, 20))

interface IProduct {
    name: string;
    id: number;
    price: number;
    description: string;
}

const products: IProduct[] = []
products.push({ id: 1, name: 'dell', price: 1000, description: '' })