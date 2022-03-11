function operateurAffectation() {
  let total = 2;

  total += total; // 4
  total += total; // 8

  return total;
}

function resultOpeAffectation() {
  alert("Résultat : " + operateurAffectation());
}

document.getElementById("operateurAffectation").innerHTML =
  "let total = 2;\ntotal += total; // 4\ntotal += total; // 8\n\nconsole.log(total);";
