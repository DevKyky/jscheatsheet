function selecteurGetElementsByTagName() {
  return document.getElementsByTagName("div").length;
}

function resultSelectByTagName() {
  alert("Résultat : " + selecteurGetElementsByTagName());
}

document.getElementById("selecteurByTagName").innerHTML =
  '// retourne le nombre de balise div de la page\ndocument.getElementsByTagName("div").length;';
