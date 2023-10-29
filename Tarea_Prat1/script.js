function mostrarImagen(imagen) {
    var imagenAmpliada = document.getElementById("imagenAmpliada");
    var imagenEmergente = document.getElementById("imagenEmergente");

    imagenAmpliada.src = imagen;
    imagenEmergente.style.display = "block";
}

function cerrarImagen() {
    var imagenEmergente = document.getElementById("imagenEmergente");
    imagenEmergente.style.display = "none";
}