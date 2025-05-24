let index = 0;
mostrarSlide(index);
setInterval(() => {
    moverSlide(1);
}, 4000); // Cambia cada 4 segundos


function moverSlide(n) {
    mostrarSlide(index += n);
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}
function mostrarDescripcion(imagen) {
    const descripcion = imagen.querySelector('.descripcion');
    descripcion.style.opacity = "1";
    descripcion.style.transform = "translateY(0)";
}

function ocultarDescripcion(imagen) {
    const descripcion = imagen.querySelector('.descripcion');
    descripcion.style.opacity = "0";
    descripcion.style.transform = "translateY(100%)";
}
function abrirRed(red) {
    alert("Estás abriendo " + red + ". Esta función fue controlada con JavaScript.");
}

function abrirWhatsApp() {
    const numero = "573001234567"; // cambia por tu número real si deseas
    const mensaje = encodeURIComponent("Hola, me gustaría más información sobre Aveiro.");
    window.open("https://wa.me/" + numero + "?text=" + mensaje, "_blank");
}
function mostrarMensaje() {
    alert("¡Aveiro te espera con sus canales, sabores y colores! 🌊");
}
window.addEventListener("DOMContentLoaded", function () {
    const idioma = navigator.language || navigator.userLanguage;
    const mensajeDiv = document.getElementById("mensajeBienvenida");

    if (idioma.startsWith("es")) {
        mensajeDiv.textContent = "¡Bienvenido! Disfruta tu visita a Aveiro.";
    } else if (idioma.startsWith("en")) {
        mensajeDiv.textContent = "Welcome! Enjoy your visit to Aveiro.";
    } else {
        mensajeDiv.textContent = "Bem-vindo! Aproveite sua visita a Aveiro.";
    }
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}
// Detectar si el dispositivo es táctil
const esMovil = window.matchMedia("(max-width: 768px)").matches;

if (esMovil) {
    const imagenes = document.querySelectorAll(".imagen");

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            const descripcion = imagen.querySelector(".descripcion");
            descripcion.style.display = descripcion.style.display === "block" ? "none" : "block";
        });
    });
    const menu = document.getElementById('menu');
    menu.addEventListener("mouseover", () => {
        menu.classList.add("active");
    });

    menu.addEventListener("mouseout", () => {
        menu.classList.remove("active");
    });

}
