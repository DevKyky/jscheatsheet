function variableVarConst() {
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

document.getElementById("variableConst").innerHTML =
  "const PI = 3.14;\nconst result = PI * 4; // 12.56\n\n{\n  const result = PI * 3; // 9.42\n}\n\nconsole.log(result);";
