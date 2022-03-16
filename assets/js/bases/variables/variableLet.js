function variableVarLet() {
  let hello = "Hello There";

  {
    let hello = "Hello World";
  }

  return hello;
}

function resultVarLet() {
  alert("Résultat : " + variableVarLet());
}

document.getElementById("variableLet").innerHTML =
  'let hello = "Hello There";\n\n{\n let hello = "Hello World";\n}\n\nconsole.log(hello);';
