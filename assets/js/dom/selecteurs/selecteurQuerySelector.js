function selecteurQuerySelector() {
  return document.querySelector("#btnSelectById").textContent;
}

function resultQuerySelector() {
  alert("Résultat : " + selecteurQuerySelector());
}

document.getElementById("selecteurQuerySelector").innerHTML =
  'document.querySelector("#btnSelectById").textContent;\n// retourne tout ce qui est contenu dans le premier élement dont l\'id est btnSelectById';
