// ===== CAMBIO DE TITULO EN CONSOLA =====

console.log("Portfolio cargado correctamente");

// ===== EFECTO SIMPLE EN NAVBAR =====

const navbarLinks = document.querySelectorAll(".nav-links a");

navbarLinks.forEach(link => {

    link.addEventListener("mouseover", () => {
        link.style.color = "#38bdf8";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });

});
