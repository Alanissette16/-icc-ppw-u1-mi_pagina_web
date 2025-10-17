// Muestra un mensaje de bienvenida al cargar la página ---
window.addEventListener("load", function() {
  alert("¡Bienvenid@! A la página web de Valeria ;p ");
});

// --- Efecto al pasar el mouse por el título cambia a color Cyan ---
const titulo = document.getElementById("title");
if (titulo) {
  const originalColor = window.getComputedStyle(titulo).color;

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "cyan";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.style.color = originalColor || "";
  });
}