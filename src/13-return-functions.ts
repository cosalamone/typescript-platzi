(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`EL total es ${rta}`)
  }


  printTotal([1,5,6,9,8]);
})();
