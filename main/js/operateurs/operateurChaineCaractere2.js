function operateurChaineCaractere2() {
    // Exemple d'opérateur de chaînes de caractères
    let maChaine = "Je suis ";
    let monAge = 17;

    if (monAge >= 18) {
        maChaine += "majeur";
    } else {
        maChaine += "mineur";
    }
     
    return maChaine;
  }
  
  function resultOpeChaineCarac2() {
    alert("Résultat : " + operateurChaineCaractere2());
  }
  
  document.getElementById(
    "operateurChaineCaractere2"
  ).innerHTML = `${operateurChaineCaractere2}`;
  