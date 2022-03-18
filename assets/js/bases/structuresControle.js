function structureControleSwitch() {
  let dateNaissance = "11.03";
  switch (dateNaissance) {
    case "11.02":
      return "Signe astrologique: Verseau";

    case "11.03":
      return "Signe astrologique: Poisson";
    default:
      return "Signe astrologique: Inconnu";
  }
}

function structureControleIfElse() {
  let monAge = 24;

  if (monAge >= 18) {
    return "Je suis majeur";
  } else {
    return "Je suis mineur";
  }
}

function structureControleFor() {
  let dateMagique = "";
  for (let i = 0; i < 2; i++) {
    dateMagique += "11.";
  }
  dateMagique += "2011";

  return dateMagique;
}

function structureControleContinue() {
  let pairs = "";

  for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    pairs += i;
  }

  return pairs;
}

function structureControleBreak() {
  let justin = 0;

  for (i = 0; i < 2; i++) {
    justin++;
    break; // l'instruction permet de sortir de la boucle. Au lieu de boucler deux fois, elle ne bouclera qu'une fois.
  }

  return justin;
}

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

function resultStControleBreak() {
  alert("Résultat : " + structureControleBreak());
}

function resultStControleContinue() {
  alert("Résultat : " + structureControleContinue());
}

function resultStControleFor() {
  alert("Résultat : " + structureControleFor());
}

function resultStControleIf() {
  alert("Résultat : " + structureControleIfElse());
}

function resultStControleSwitch() {
  alert("Résultat : " + structureControleSwitch());
}

document.getElementById("stControleWhile").innerHTML =
  'let dateMagique = "";\nlet i = 0;\nwhile (i < 2) {\n  dateMagique += "11.";\n  i++; // incrémente i de 1\n}\ndateMagique += "2011";\n\nconsole.log(dateMagique);';

document.getElementById("stControleBreak").innerHTML =
  "let justin = 0;\nfor (i = 0; i < 2; i++) {\n  justin++;\n  break; // l'instruction permet de sortir de la boucle. Au lieu de boucler deux fois, elle ne bouclera qu'une fois.\n}\n\nconsole.log(justin);";

document.getElementById("stControleContinue").innerHTML =
  "let pairs = \"\";\nfor (i = 0; i < 10; i++) {\n  if (i%2 !== 0) {\n    continue; // Si le reste n'est pas égal à 0, on passe à l'itération suivante\n  }\n  pairs += i;\n}\n\nconsole.log(pairs); // La variable retourne un String des chiffres pairs entre 0 et 9";

document.getElementById("stControleFor").innerHTML =
  'let dateMagique = "";\nfor (let i = 0; i < 2; i++) {\n\n  dateMagique += "11.";\n}\ndateMagique += "2011";\n\nconsole.log(dateMagique);';

document.getElementById("stControleIf").innerHTML =
  'let monAge = 24;\n\nif (monAge >= 18) {\n  console.log("Je suis majeur");\n} else {\n  console.log("Je suis mineur");\n}';

document.getElementById("stControleSwitch").innerHTML =
  'let dateNaissance = "11.03";\nswitch (dateNaissance) {\n  case "11.02":\n    return "Signe astrologique: Verseau";\n  case "11.03":\n    return "Signe astrologique: Poisson";\n\n  default:\n    return "Signe astrologique: Inconnu";\n}';
