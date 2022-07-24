"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addPRoduct = exports.products = void 0;
exports.products = [];
const addPRoduct = (data) => {
    exports.products.push(data);
};
exports.addPRoduct = addPRoduct;
const calcStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return (total);
};
exports.calcStock = calcStock;
