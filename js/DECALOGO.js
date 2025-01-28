const modal2 = document.getElementById("modal-2");
const openModal2 = document.getElementById("open-modal-2");
const closeModal2 = document.getElementById("close-modal-2");

// Abrir la segunda ventana emergente
openModal2.addEventListener("click", () => {
    modal2.style.display = "flex";
});

// Cerrar la segunda ventana emergente
closeModal2.addEventListener("click", () => {
    modal2.style.display = "none";
});

// Cerrar al hacer clic fuera del contenido de la segunda ventana
window.addEventListener("click", (e) => {
    if (e.target === modal2) {
        modal2.style.display = "none";
    }
});