(() => {
  let prices = [1, 2, 3, 55, 6, 94, true, "hello"];
  prices.push(12);

  let mixed: (number | string | boolean | object)[] = [1, 6, 94, false, "bye"]

  let numbers = [1, 2, 3, 55, 6, 94];
  numbers.map(item => item * 2)

})();
