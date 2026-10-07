
// Obtenemos el botón por medio de su ID

let boton = document.getElementById("botonColor");


// Cuando se presione el botón

boton.addEventListener("click", function() {

    // Obtenemos todos los divs que están dentro del contenedor

    let divs = document.querySelectorAll(".contenedor div");


    // Recorremos todos los divs

    divs.forEach(function(div) {

        // Cambiamos el color de fondo

        div.style.backgroundColor = "#8e44ad";

    });

});