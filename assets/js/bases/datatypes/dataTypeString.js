function dataTypeString() {
  let nouvelle = "nouvelle";
  let maChaine = `ma ${nouvelle} chaîne`;

  return maChaine;
}

function resultDatatString() {
  alert("Résultat : " + dataTypeString());
}

document.getElementById("datatString").innerHTML =
  'let nouvelle = "nouvelle";\nlet maChaine = `ma ${nouvelle} chaîne`;\n\nconsole.log(maChaine);';
