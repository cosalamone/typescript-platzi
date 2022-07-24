"use strict";
(() => {
    let userID;
    userID = 1212;
    userID = "asd";
    function greeting(myText) {
        if (typeof myText === "string") {
            console.log(`string ${myText.toLocaleUpperCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(2)}`);
        }
    }
    greeting("hola");
    greeting(1234.745632142);
})();
