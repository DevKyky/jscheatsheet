function selecteurQuerySelectorAll() {
  return document.querySelectorAll("div");
}

function resultQuerySelectorAll() {
  alert("Résultat : " + selecteurQuerySelectorAll());
}

document.getElementById("selecteurQuerySelectorAll").innerHTML =
  'document.querySelector("#btnSelectById").textContent;\n// retourne tout ce qui est contenu dans le premier élement dont l\'id est btnSelectById';
