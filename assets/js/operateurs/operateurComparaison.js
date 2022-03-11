function operateurComparaison() {
  return "42" == 42;
}

function resultOpeComparaison() {
  alert("Résultat : " + operateurComparaison());
}

document.getElementById("operateurComparaison").innerHTML =
  'console.log("42" == 42); //true';
