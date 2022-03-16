function structureControleFor() {
  let dateMagique = "";
  for (let i = 0; i < 2; i++) {
    dateMagique += "11.";
  }
  dateMagique += "2011";

  return dateMagique;
}

function resultStControleFor() {
  alert("Résultat : " + structureControleFor());
}

document.getElementById("stControleFor").innerHTML =
  'let dateMagique = "";\nfor (let i = 0; i < 2; i++) {\n\n  dateMagique += "11.";\n}\ndateMagique += "2011";\n\nconsole.log(dateMagique);';
