(() => {
  return "je suis anonyme";
})();

function resultFuncAnonyme() {
  alert(
    "Résultat : " +
      (() => {
        return "je suis anonyme";
      })()
  );
}

document.getElementById("funcAnonyme").innerHTML =
  '(() => {\n  console.log("je suis anonyme");\n})();';
