function fonctionSimple(a, b) {
  return a + b;
}

function resultFuncSimple() {
  alert("Résultat : " + fonctionSimple(17, 15));
}

document.getElementById("funcSimple").innerHTML =
  "// la fonction addition me permet de retourner le résultat de l'addition de a + b\nfunction addition(a, b) {\n  return a + b;\n}\n\nconsole.log(addition(17, 15)); // ici, a vaut 17 et b vaut 15 = 32";
