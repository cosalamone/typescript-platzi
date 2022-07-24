(() => {

  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }

  const products: Product[] = [];

  const addPRoduct = (data: Product) => {
    products.push(data);
  }

  addPRoduct({
    title: "prod 1",
    createdAt: new Date(1994, 10, 10),
    stock: 13
  });
  console.log(products)
})();
