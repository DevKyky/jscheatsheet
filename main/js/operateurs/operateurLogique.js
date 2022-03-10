function operateurLogique() {
    // Exemple d'opérateur logique
    // Je souhaites aller voter à la prochaine élection. 
    let age = 18; // Je dois être majeur
    let nationalite = "fr"; // Et avoir la nationalité française
  
    if (18 >= age && nationalite == "fr") {
      return "Je peux voter";
    } else {
      return "Je ne peux pas voter";
    }
  }
  
  function resultOpeLogique() {
    alert("Résultat : " + operateurLogique());
  }
  
  document.getElementById(
    "operateurLogique"
  ).innerHTML = `${operateurLogique}`;
  