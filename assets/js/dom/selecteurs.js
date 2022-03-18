const btn = document.getElementById("btnSelectById");

function selecteurGetElementsByClassName() {
  return document.getElementsByClassName("document");
}

function selecteurGetElementsByName() {
  return document.getElementsByName("document").length;
}

function selecteurGetElementsByTagName() {
  return document.getElementsByTagName("div").length;
}

function selecteurQuerySelector() {
  return document.querySelector("#btnSelectById").textContent;
}

function selecteurQuerySelectorAll() {
  return document.querySelectorAll("div");
}

function resultSelectById() {
  btn.style.backgroundColor = "#f1f1f1";
}

function resultSelectByClassName() {
  alert("Résultat : " + selecteurGetElementsByClassName());
}

function resultSelectByName() {
  alert("Résultat : " + selecteurGetElementsByName());
}

function resultSelectByTagName() {
  alert("Résultat : " + selecteurGetElementsByTagName());
}

function resultQuerySelector() {
  alert("Résultat : " + selecteurQuerySelector());
}

function resultQuerySelectorAll() {
  alert("Résultat : " + selecteurQuerySelectorAll());
}

document.getElementById("selecteurById").innerHTML =
  'document.getElementById("btnSelectById").style.backgroundColor = "#f1f1f1";';

document.getElementById("selecteurByClassName").innerHTML =
  'document.getElementsByClassName("document");';

document.getElementById("selecteurByName").innerHTML =
  'document.getElementsByName("document").length;';

document.getElementById("selecteurByTagName").innerHTML =
  '// retourne le nombre de balise div de la page\ndocument.getElementsByTagName("div").length;';

document.getElementById("selecteurQuerySelector").innerHTML =
  'document.querySelector("#btnSelectById").textContent;\n// retourne tout ce qui est contenu dans le premier élement dont l\'id est btnSelectById';

document.getElementById("selecteurQuerySelectorAll").innerHTML =
  'document.querySelector("#btnSelectById").textContent;\n// retourne tout ce qui est contenu dans le premier élement dont l\'id est btnSelectById';
