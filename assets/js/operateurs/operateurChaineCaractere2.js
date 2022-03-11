function operateurChaineCaractere2() {
  let maChaine = "J'ai ";
  let monAge = "17 ans";

  return (maChaine += monAge);
}

function resultOpeChaineCarac2() {
  alert("Résultat : " + operateurChaineCaractere2());
}

document.getElementById("operateurChaineCaractere2").innerHTML =
  'let maChaine = "J\'ai ";\nlet monAge = "17 ans";\n\nconsole.log(maChaine += monAge);';
