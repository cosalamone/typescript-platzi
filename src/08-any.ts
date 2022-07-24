(() => { // se aconseja que no sea utilizado! -> se puede considerad MalaPractica
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = [100, 40];
  myDinamicVar = {};

  myDinamicVar = "Hola";
  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2)
})();
