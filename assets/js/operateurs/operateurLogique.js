function operateurLogique() {
  return "1" == 1 && 2 === 2;
}

function resultOpeLogique() {
  alert("Résultat : " + operateurLogique());
}

document.getElementById("operateurLogique").innerHTML =
  'console.log("1" == 1 && 2 === 2); // true';
