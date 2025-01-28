const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

// Abrir la ventana emergente
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar la ventana emergente
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});