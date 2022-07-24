"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addPRoduct)({
    name: "prod 1",
    createdAt: new Date(1994, 10, 10),
    stock: 13,
});
(0, product_service_1.addPRoduct)({
    name: "prod 2",
    createdAt: new Date(2003, 1, 10),
    stock: 23,
    size: "M"
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
