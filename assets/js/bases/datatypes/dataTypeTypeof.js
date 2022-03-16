function dataTypeTypeof() {
  const maVariable = 42;

  return typeof maVariable;
}

function resultDatatTypeof() {
  alert("Résultat : " + dataTypeTypeof());
}

document.getElementById("datatTypeof").innerHTML =
  "const maVariable = 42;\n\nconsole.log(typeof maVariable);";
