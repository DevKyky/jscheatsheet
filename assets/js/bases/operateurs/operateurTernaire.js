function operateurTernaire() {
  let maChaine = "Je suis ";

  42 >= 18 ? (maChaine += "majeur") : (maChaine += "mineur");

  return maChaine;
}

function resultOpeTernaire() {
  alert("Résultat : " + operateurTernaire());
}

document.getElementById("operateurTernaire").innerHTML =
  'let maChaine = "Je suis ";\n\n(42 >= 18) ? maChaine += "majeur" : maChaine += "mineur";\n\nconsole.log(maChaine);';
