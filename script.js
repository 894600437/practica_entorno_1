function abrirModal() {

    document.getElementById("miModal").style.display = "block";

}


function cerrarModal() {

    document.getElementById("miModal").style.display = "none";

}


function confirmarReserva() {

    document.getElementById("mensaje").innerHTML =
        "¡Reserva realizada correctamente!";

}


function confirmarDesdeModal() {

    cerrarModal();

    confirmarReserva();

}