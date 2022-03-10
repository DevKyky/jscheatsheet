function operateurComparaison() {
  // Exemple de comparaison
  let majorite = 18;

  if (18 >= majorite) {
    // Si 18 est supérieur ou égal à majorite
    return "Je suis majeur";
  } else {
    // Si 18 n'est pas supérieur ou égal à majorite
    return "Je suis mineur";
  }
}

function resultOpeComparaison() {
  alert("Résultat : " + operateurComparaison());
}

document.getElementById(
  "operateurComparaison"
).innerHTML = `${operateurComparaison}`;
