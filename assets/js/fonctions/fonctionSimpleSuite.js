function fonctionSimpleSuite(a, b) {
  b = 2;
  return a + b;
}

function resultFuncSimpleSuite() {
  alert("Résultat : " + fonctionSimpleSuite(17, 15));
}

document.getElementById("funcSimpleSuite").innerHTML =
  "function addition(a, b) {\n  b = 2;\n  return a + b;\n}\n\nconsole.log(addition(17, 15)); // 19";
