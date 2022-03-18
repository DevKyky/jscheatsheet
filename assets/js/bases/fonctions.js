const fonctionFlecheeMulti = (a, b) => {
  b = 2;

  return a + b;
};

const fonctionFlechee = (a, b) => a + b;

(() => {
  return "je suis anonyme";
})();

function fonctionSimpleSuite(a, b) {
  b = 2;
  return a + b;
}

function fonctionSimple(a, b) {
  return a + b;
}

function resultFuncSimple() {
  alert("Résultat : " + fonctionSimple(17, 15));
}

function resultFuncSimpleSuite() {
  alert("Résultat : " + fonctionSimpleSuite(17, 15));
}

function resultFuncAnonyme() {
  alert(
    "Résultat : " +
      (() => {
        return "je suis anonyme";
      })()
  );
}

function resultFuncFlechee() {
  alert("Résultat : " + fonctionFlechee(17, 15));
}

function resultFuncFlecheeMulti() {
  alert("Résultat : " + fonctionFlecheeMulti(17, 15));
}

document.getElementById("funcSimple").innerHTML =
  "// la fonction addition me permet de retourner le résultat de l'addition de a + b\nfunction addition(a, b) {\n  return a + b;\n}\n\nconsole.log(addition(17, 15)); // ici, a vaut 17 et b vaut 15 = 32";

document.getElementById("funcSimpleSuite").innerHTML =
  "function addition(a, b) {\n  b = 2;\n  return a + b;\n}\n\nconsole.log(addition(17, 15)); // 19";

document.getElementById("funcAnonyme").innerHTML =
  '(() => {\n  console.log("je suis anonyme");\n})();';

document.getElementById("funcFlechee").innerHTML =
  "const addition = (a, b) => a + b;\n\nconsole.log(addition(17, 15)); // 32";

document.getElementById("funcFlecheeMulti").innerHTML =
  "// exemple fonction fléchée multilignes\nconst addition = (a, b) => {\n  b = 2;\n  return a + b; // return est obligatoire dans une fonction fléchée multiligne\n}\n\nconsole.log(addition(17, 15)); // 19";
