function variableVarLet() {
  // Exemple avec la variable let
  let hello = "Hello There";

  {
    let hello = "Hello World";
  }

  return hello;
}

function resultVarLet() {
  alert("Résultat : " + variableVarLet());
}

document.getElementById("variableLet").innerHTML = variableVarLet;
