(() => {
  type Sizes = "S" | "M" | "L" | "XL";

  function creatProductoJson(
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  ) {
    return {
      title, createdAt, stock, size
    }
  }

  const producto1 = creatProductoJson("p1", new Date(), 12);
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.size);


})();
