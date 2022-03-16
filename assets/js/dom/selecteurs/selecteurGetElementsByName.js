function selecteurGetElementsByName() {
  return document.getElementsByName("document").length;
}

function resultSelectByName() {
  alert("Résultat : " + selecteurGetElementsByName());
}

document.getElementById("selecteurByName").innerHTML =
  'document.getElementsByName("document").length;';
