function dataTypeNull() {
  let maVariable = null;

  return maVariable;
}

function resultDatatNull() {
  alert("Résultat : " + dataTypeNull());
}

document.getElementById("datatNull").innerHTML =
  "let maVariable = null;\n\nconsole.log(maVariable);";
