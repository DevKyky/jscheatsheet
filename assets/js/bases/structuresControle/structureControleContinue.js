function structureControleContinue() {
  let pairs = "";

  for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    pairs += i;
  }

  return pairs;
}

function resultStControleContinue() {
  alert("Résultat : " + structureControleContinue());
}

document.getElementById("stControleContinue").innerHTML =
  "let pairs = \"\";\nfor (i = 0; i < 10; i++) {\n  if (i%2 !== 0) {\n    continue; // Si le reste n'est pas égal à 0, on passe à l'itération suivante\n  }\n  pairs += i;\n}\n\nconsole.log(pairs); // La variable retourne un String des chiffres pairs entre 0 et 9";
