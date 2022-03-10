function dataTypeString() {
  // Exemple type string
  let nouvelle = "nouvelle";
  let maChaine = `ma ${nouvelle} chaîne`;

  return maChaine;
}

function resultDatatString() {
  alert("Résultat : " + dataTypeString());
}

document.getElementById("datatString").innerHTML = dataTypeString;
