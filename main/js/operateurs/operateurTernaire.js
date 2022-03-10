function operateurTernaire() {
    // Exemple d'opérateur de chaînes de caractères
    let maChaine = "Je suis ";
    let monAge = 17;

    /* Si mon âge est supérieur ou égal à 18,
        ? "alors" je concatène maChaine avec "majeur"
        : "sinon" je concatène maChaine avec "mineur"
    */
    (monAge >= 18) ? maChaine += "majeur" : maChaine += "mineur";
     
    return maChaine;
  }
  
  function resultOpeTernaire() {
    alert("Résultat : " + operateurTernaire());
  }
  
  document.getElementById(
    "operateurTernaire"
  ).innerHTML = `${operateurTernaire}`;
  