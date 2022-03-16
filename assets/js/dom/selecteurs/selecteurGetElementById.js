const btn = document.getElementById("btnSelectById");

function resultSelectById() {
  btn.style.backgroundColor = "#f1f1f1";
}

document.getElementById("selecteurById").innerHTML =
  'document.getElementById("btnSelectById").style.backgroundColor = "#f1f1f1";';
