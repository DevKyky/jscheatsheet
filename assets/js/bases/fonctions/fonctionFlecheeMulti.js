const fonctionFlecheeMulti = (a, b) => {
  b = 2;

  return a + b;
};

function resultFuncFlecheeMulti() {
  alert("Résultat : " + fonctionFlecheeMulti(17, 15));
}

document.getElementById("funcFlecheeMulti").innerHTML =
  "// exemple fonction fléchée multilignes\nconst addition = (a, b) => {\n  b = 2;\n  return a + b; // return est obligatoire dans une fonction fléchée multiligne\n}\n\nconsole.log(addition(17, 15)); // 19";
