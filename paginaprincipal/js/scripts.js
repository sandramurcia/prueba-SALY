let modalInicioSesion = document.getElementById('miModal');
let modalRegistro = document.getElementById('registroModal');

let abrirInicioSesion = document.getElementById('abrir_modal');
let abrirRegistro = document.getElementById('abrir_modal_registro');

let cerrarInicioSesion = document.getElementById('close_modal');
let cerrarRegistro = document.getElementById('close_modal_registro');

abrirInicioSesion.addEventListener('click', function () {
    modalInicioSesion.style.display = 'block';
});

abrirRegistro.addEventListener('click', function () {
    modalRegistro.style.display = 'block';
});

cerrarInicioSesion.addEventListener('click', function () {
    modalInicioSesion.style.display = 'none';
});

cerrarRegistro.addEventListener('click', function () {
    modalRegistro.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target == modalInicioSesion) {
        modalInicioSesion.style.display = 'none';
    } else if (e.target == modalRegistro) {
        modalRegistro.style.display = 'none';
    }
});
