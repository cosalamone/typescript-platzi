"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = "S";
    shirtSize = "M";
    shirtSize = "L";
    shirtSize = "XL";
    function greeting(userId, size) {
        if (typeof userId === "string") {
            console.log(`string ${userId.toLocaleUpperCase()}`);
        }
    }
})();
