function structureControleBreak() {
  let justin = 0;

  for (i = 0; i < 2; i++) {
    justin++;
    break; // l'instruction permet de sortir de la boucle. Au lieu de boucler deux fois, elle ne bouclera qu'une fois.
  }

  return justin;
}

function resultStControleBreak() {
  alert("Résultat : " + structureControleBreak());
}

document.getElementById("stControleBreak").innerHTML =
  "let justin = 0;\nfor (i = 0; i < 2; i++) {\n  justin++;\n  break; // l'instruction permet de sortir de la boucle. Au lieu de boucler deux fois, elle ne bouclera qu'une fois.\n}\n\nconsole.log(justin);";
