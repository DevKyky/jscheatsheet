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

function resultStControleSwitch() {
  alert("Résultat : " + structureControleSwitch());
}

document.getElementById("stControleSwitch").innerHTML =
  'let dateNaissance = "11.03";\nswitch (dateNaissance) {\n  case "11.02":\n    return "Signe astrologique: Verseau";\n  case "11.03":\n    return "Signe astrologique: Poisson";\n\n  default:\n    return "Signe astrologique: Inconnu";\n}';
