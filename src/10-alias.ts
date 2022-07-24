(() => {
  type UserID = string | number | boolean;
  let userId: UserID;


  // literal types -> CREAR UN CONJUNTO ACOTADO DE OPCIONES
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "S";
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL"

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLocaleUpperCase()}`)
    }
  }

})();
