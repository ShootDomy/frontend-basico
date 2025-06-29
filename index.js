document.querySelectorAll(".tab label").forEach((label) => {
  label.addEventListener("click", (e) => {
    // Si el click fue directamente en el icono
    if (e.target.classList.contains("toggle-icon")) {
      const checkbox = label.previousElementSibling;
      checkbox.checked = !checkbox.checked;

      // Actualizar icono inmediatamente
      const icon = label.querySelector(".toggle-icon");
      icon.textContent = checkbox.checked ? "-" : "+";
    }
  });
});
