function dataTypeNumber() {
  // Exemple type number
  let entier = 10;
  let decimal = 3.5;

  return entier * decimal;
}

function resultDatatNumber() {
  alert("Résultat : " + dataTypeNumber());
}

document.getElementById("datatNumber").innerHTML = dataTypeNumber;
