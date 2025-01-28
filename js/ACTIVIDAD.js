const textareas = document.querySelectorAll(".texto");
const imageContainers = document.querySelectorAll(".image-container");

textareas.forEach((textarea, index) => {
    textarea.addEventListener("input", function () {
        const text = this.value.trim();
        const wordCount = text ? text.split(/\s+/).length : 0;
        const image = imageContainers[index].querySelector(".dynamic-image");


    if (wordCount <= 10) {
        image.src = "img/triste.png"; // Ruta de la imagen para menos de 10 palabras
        image.style.display = "block";
    } else if (wordCount <= 20) {
        image.src = "img/seria.png" // Ruta de la imagen para menos de 20 palabras
        image.style.display = "block";
    } else if (wordCount < 30) {
        image.src = "img/feliz.png"; // Ruta de la imagen para menos de 30 palabras
        image.style.display = "block";
    } else if (wordCount >= 30) {
        image.src = "img/feliz.png"; // Ruta de la imagen para mas de 30 palabras
        image.style.display = "block";
    }else {
        image.style.display = "none"; // Oculta la imagen si hay 30 o más palabras
    }
});

});