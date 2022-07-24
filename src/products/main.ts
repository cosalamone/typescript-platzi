import { addPRoduct, calcStock, products } from "./product.service";

addPRoduct({
    name: "prod 1",
    createdAt: new Date(1994, 10, 10),
    stock: 13,
});

addPRoduct({
    name: "prod 2",
    createdAt: new Date(2003, 1, 10),
    stock: 23,
    size: "M"
});

console.log(products)
const total = calcStock();
console.log(total);