let boton = document.getElementById("botonColor");

let colores = [
    "#8e7cc3",
    "#7aa7d9",
    "#7fc8a9",
    "#d98b8b",
    "#c59bd1",
    "#e0b56b",
    "#6fb8b0",
    "#d47777"
];

let cambio = 0;

boton.addEventListener("click", function() {

    let divs = document.querySelectorAll(".contenedor div");

    divs.forEach(function(div, i) {
        div.style.backgroundColor = colores[(i + cambio) % colores.length];
    });

    cambio++;
}); 