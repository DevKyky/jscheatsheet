function structureControleWhile() {
  let dateMagique = "";
  let i = 0;
  while (i < 2) {
    dateMagique += "11.";
    i++;
  }
  dateMagique += "2011";

  return dateMagique;
}

function resultStControleWhile() {
  alert("Résultat : " + structureControleWhile());
}

document.getElementById("stControleWhile").innerHTML =
  'let dateMagique = "";\nlet i = 0;\nwhile (i < 2) {\n  dateMagique += "11.";\n  i++; // incrémente i de 1\n}\ndateMagique += "2011";\n\nconsole.log(dateMagique);';
