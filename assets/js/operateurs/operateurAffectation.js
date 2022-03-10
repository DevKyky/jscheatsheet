function operateurAffectation() {
  // Exemple d'affectation après addition
  let total = 0;
  let b = 2;

  total += b; // 2
  total += b; // 4

  return total;
}

function resultOpeAffectation() {
  alert("Résultat : " + operateurAffectation());
}

document.getElementById(
  "operateurAffectation"
).innerHTML = operateurAffectation;
