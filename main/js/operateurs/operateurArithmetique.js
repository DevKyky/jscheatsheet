function operateurArithmetique() {
    // Exemple d'opérateur arythmétique
    let unDeuxTrois = 1;
  
    unDeuxTrois++; //2
    unDeuxTrois++; //3

    return unDeuxTrois
  }
  
  function result() {
    alert("Résultat : " + operateurArithmetique());
  }
  
  document.getElementById(
    "operateurArithmetique"
  ).innerHTML = `${operateurArithmetique}`;
  