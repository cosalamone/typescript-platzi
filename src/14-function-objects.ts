(() => {
  const logIn = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }
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

  type Sizes = "S" | "M" | "L" | "XL";
  const products: any[] = [];

  const addPRoduct = (data: {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
    products.push(data);
  }

  addPRoduct({
    title: "prod 1",
    createdAt: new Date(1994, 10, 10),
    stock: 13
  });
  console.log(products)
})();
