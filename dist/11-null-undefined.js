"use strict";
(() => {
    //  let myNumber: number;
    //  let myString: string;
    let muNull = null;
    let myUndefined = undefined;
    let myNumber = null; //
    myNumber = 12;
    /* function hi (name: string|null){
       let hello = "hola";
       if (name){
         hello += name;
       } else {
         hello += "nobody";
     }
     console.log(hello)
     }*/
    function hi2(name) {
        let hello = "hola";
        hello += (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) || "nadie";
        console.log(hello);
    }
    hi2("Nicolas");
    hi2(null);
})();
