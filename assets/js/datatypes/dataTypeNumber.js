function dataTypeNumber() {
  let entier = 10;
  let decimal = 3.5;

  return entier * decimal;
}

function resultDatatNumber() {
  alert("Résultat : " + dataTypeNumber());
}

document.getElementById("datatNumber").innerHTML =
  "let entier = 10;\nlet decimal = 3.5;\n\nconsole.log(entier * decimal);";
