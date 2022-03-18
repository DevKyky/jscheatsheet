function operateurTernaire() {
  let maChaine = "Je suis ";

  42 >= 18 ? (maChaine += "majeur") : (maChaine += "mineur");

  return maChaine;
}

function operateurAffectation() {
  let total = 2;

  total += total; // 4
  total += total; // 8

  return total;
}

function operateurArithmetique() {
  let unDeuxTrois = 1;

  unDeuxTrois++; //2
  unDeuxTrois++; //3

  return unDeuxTrois;
}

function operateurChaineCaractere1() {
  return "chaîne de " + "caractères";
}

function operateurChaineCaractere2() {
  let maChaine = "J'ai ";
  let monAge = "17 ans";

  return (maChaine += monAge);
}

function operateurComparaison() {
  return "42" == 42;
}

function operateurLogique() {
  return "1" == 1 && 2 === 2;
}

function resultOpeTernaire() {
  alert("Résultat : " + operateurTernaire());
}

function resultOpeAffectation() {
  alert("Résultat : " + operateurAffectation());
}

function resultOpeArithmetique() {
  alert("Résultat : " + operateurArithmetique());
}

function resultOpeChaineCarac1() {
  alert("Résultat : " + operateurChaineCaractere1());
}

function resultOpeChaineCarac2() {
  alert("Résultat : " + operateurChaineCaractere2());
}

function resultOpeComparaison() {
  alert("Résultat : " + operateurComparaison());
}

function resultOpeLogique() {
  alert("Résultat : " + operateurLogique());
}

document.getElementById("operateurTernaire").innerHTML =
  'let maChaine = "Je suis ";\n\n(42 >= 18) ? maChaine += "majeur" : maChaine += "mineur";\n\nconsole.log(maChaine);';

document.getElementById("operateurAffectation").innerHTML =
  "let total = 2;\ntotal += total; // 4\ntotal += total; // 8\n\nconsole.log(total);";

document.getElementById("operateurArithmetique").innerHTML =
  "let unDeuxTrois = 1;\n\nunDeuxTrois++; //2\nunDeuxTrois++; //3\n\nconsole.log(unDeuxTrois);";

document.getElementById("operateurChaineCaractere1").innerHTML =
  'console.log("chaîne de " + "caractères");';

document.getElementById("operateurChaineCaractere2").innerHTML =
  'let maChaine = "J\'ai ";\nlet monAge = "17 ans";\n\nconsole.log(maChaine += monAge);';

document.getElementById("operateurComparaison").innerHTML =
  'console.log("42" == 42); //true';

document.getElementById("operateurLogique").innerHTML =
  'console.log("1" == 1 && 2 === 2); // true';
