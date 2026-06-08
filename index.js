var boton = document.getElementById("toggleBtn");
var tarjeta = document.getElementById("card");

function cambiarTema() {
  tarjeta.classList.toggle("dark");
  document.body.classList.toggle("dark");
  
  if (tarjeta.classList.contains("dark")) {
    boton.textContent = "☀️ Modo claro";
  } else {
    boton.textContent = "🌙 Modo oscuro";
  }
}


