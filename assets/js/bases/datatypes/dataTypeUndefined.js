function dataTypeUndefined() {
  let maVariable;

  return maVariable;
}

function resultDatatUndefined() {
  alert("Résultat : " + dataTypeUndefined());
}

document.getElementById("datatUndefined").innerHTML =
  "let maVariable;\n\nconsole.log(maVariable);";
