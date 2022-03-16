const fonctionFlechee = (a, b) => a + b;

function resultFuncFlechee() {
  alert("Résultat : " + fonctionFlechee(17, 15));
}

document.getElementById("funcFlechee").innerHTML =
  "const addition = (a, b) => a + b;\n\nconsole.log(addition(17, 15)); // 32";
