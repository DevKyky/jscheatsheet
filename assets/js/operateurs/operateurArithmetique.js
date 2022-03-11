function operateurArithmetique() {
  let unDeuxTrois = 1;

  unDeuxTrois++; //2
  unDeuxTrois++; //3

  return unDeuxTrois;
}

function resultOpeArithmetique() {
  alert("Résultat : " + operateurArithmetique());
}

document.getElementById("operateurArithmetique").innerHTML =
  "let unDeuxTrois = 1;\n\nunDeuxTrois++; //2\nunDeuxTrois++; //3\n\nconsole.log(unDeuxTrois);";
