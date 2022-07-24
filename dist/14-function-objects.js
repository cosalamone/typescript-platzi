"use strict";
(() => {
    const logIn = (data) => {
        console.log(data.email, data.password);
    };
    /*
    const logIn= (email: string, password: string)=>{
      console.log(email,password)
     }
    */
    // logIn("co@gmail.com", "asd1234");
    logIn({
        email: "cosala@gmail.com",
        password: 123,
    });
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
