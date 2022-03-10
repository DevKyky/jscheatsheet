function variableVarConst() {
  // Exemple avec la variable const
  const PI = 3.14;
  const result = PI * 4; // 12.56

  {
    const result = PI * 3; // 9.42
  }

  return result;
}

function resultVarConst() {
  alert("Résultat : " + variableVarConst());
}

document.getElementById("variableConst").innerHTML = variableVarConst;
