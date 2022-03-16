function selecteurGetElementsByClassName() {
  return document.getElementsByClassName("document");
}

function resultSelectByClassName() {
  alert("Résultat : " + selecteurGetElementsByClassName());
}

document.getElementById("selecteurByClassName").innerHTML =
  'document.getElementsByClassName("document");';
