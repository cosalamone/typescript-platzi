"use strict";
(() => {
    const products = [];
    const addPRoduct = (data) => {
        products.push(data);
    };
    addPRoduct({
        title: "prod 1",
        createdAt: new Date(1994, 10, 10),
        stock: 13
    });
    console.log(products);
})();
