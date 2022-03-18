function dataTypeBool() {
  return 2 > 1;
}

function dataTypeNull() {
  let maVariable = null;

  return maVariable;
}

function dataTypeNumber() {
  let entier = 10;
  let decimal = 3.5;

  return entier * decimal;
}

function dataTypeString() {
  let nouvelle = "nouvelle";
  let maChaine = `ma ${nouvelle} chaîne`;

  return maChaine;
}

function dataTypeTypeof() {
  const maVariable = 42;

  return typeof maVariable;
}

function dataTypeUndefined() {
  let maVariable;

  return maVariable;
}

function resultDatatBool() {
  alert("Résultat : " + dataTypeBool());
}

function resultDatatNull() {
  alert("Résultat : " + dataTypeNull());
}

function resultDatatNumber() {
  alert("Résultat : " + dataTypeNumber());
}

function resultDatatString() {
  alert("Résultat : " + dataTypeString());
}

function resultDatatTypeof() {
  alert("Résultat : " + dataTypeTypeof());
}

function resultDatatUndefined() {
  alert("Résultat : " + dataTypeUndefined());
}

document.getElementById("datatBool").innerHTML = "console.log(2 > 1); //true";

document.getElementById("datatNull").innerHTML =
  "let maVariable = null;\n\nconsole.log(maVariable);";

document.getElementById("datatNumber").innerHTML =
  "let entier = 10;\nlet decimal = 3.5;\n\nconsole.log(entier * decimal);";

document.getElementById("datatString").innerHTML =
  'let nouvelle = "nouvelle";\nlet maChaine = `ma ${nouvelle} chaîne`;\n\nconsole.log(maChaine);';

document.getElementById("datatTypeof").innerHTML =
  "const maVariable = 42;\n\nconsole.log(typeof maVariable);";

document.getElementById("datatUndefined").innerHTML =
  "let maVariable;\n\nconsole.log(maVariable);";
