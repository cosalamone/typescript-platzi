"use strict";
(() => {
    function creatProductoJson(title, createdAt, stock, size) {
        return {
            title, createdAt, stock, size
        };
    }
    const producto1 = creatProductoJson("p1", new Date(), 12);
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.size);
})();
