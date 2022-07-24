"use strict";
(() => {
    let myDinamicVar;
    myDinamicVar = 100;
    myDinamicVar = null;
    myDinamicVar = [100, 40];
    myDinamicVar = {};
    myDinamicVar = "Hola";
    const rta = myDinamicVar.toLocaleLowerCase();
    console.log(rta);
    myDinamicVar = 1212;
    const rta2 = myDinamicVar.toFixed();
    console.log(rta2);
})();
