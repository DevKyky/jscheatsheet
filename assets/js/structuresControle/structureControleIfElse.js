function structureControleIfElse() {
  let monAge = 24;

  if (monAge >= 18) {
    return "Je suis majeur";
  } else {
    return "Je suis mineur";
  }
}

function resultStControleIf() {
  alert("Résultat : " + structureControleIfElse());
}

document.getElementById("stControleIf").innerHTML =
  'let monAge = 24;\n\nif (monAge >= 18) {\n  console.log("Je suis majeur");\n} else {\n  console.log("Je suis mineur");\n}';
