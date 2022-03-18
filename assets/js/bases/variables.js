function variableVarConst() {
  const PI = 3.14;
  const result = PI * 4; // 12.56

  {
    const result = PI * 3; // 9.42
  }

  return result;
}

function variableVarLet() {
  let hello = "Hello There";

  {
    let hello = "Hello World";
  }

  return hello;
}

function resultVarConst() {
  alert("Résultat : " + variableVarConst());
}

function resultVarLet() {
  alert("Résultat : " + variableVarLet());
}

document.getElementById("variableConst").innerHTML =
  "const PI = 3.14;\nconst result = PI * 4; // 12.56\n\n{\n  const result = PI * 3; // 9.42\n}\n\nconsole.log(result);";

document.getElementById("variableLet").innerHTML =
  'let hello = "Hello There";\n\n{\n let hello = "Hello World";\n}\n\nconsole.log(hello);';
