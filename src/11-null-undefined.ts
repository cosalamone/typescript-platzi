(() => {
  //  let myNumber: number;
  //  let myString: string;
  let muNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //
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

  function hi2(name: string | null) {
    let hello = "hola";
    hello += name?.toLocaleLowerCase() || "nadie";
    console.log(hello)
  }



  hi2("Nicolas")
  hi2(null)


})();
