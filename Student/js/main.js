// Función para alternar la visibilidad del submenú
$(document).ready(function(){
    $('.dropdown-menu-button').on('click', function(){
        var dropMenu = $(this).next('ul');
        dropMenu.slideToggle('slow');
    });
});

//salida del sistema
document.addEventListener("DOMContentLoaded", function() {
    var exitButton = document.querySelector('.exit-system-button');
    var popupConfirm = document.getElementById('popup-confirm');
    var confirmYesButton = document.getElementById('confirm-yes');
    var confirmNoButton = document.getElementById('confirm-no');

    exitButton.addEventListener('click', function() {
        popupConfirm.style.display = 'block';
    });

    confirmYesButton.addEventListener('click', function() {
        // Redireccionar al enlace especificado en el atributo data-href
        var href = exitButton.getAttribute('data-href');
        window.location.href = href;
    });

    confirmNoButton.addEventListener('click', function() {
        popupConfirm.style.display = 'none';
    });

   
});
function playSpeech() {
    var texto = document.getElementById("motivacion").textContent;
    decir(texto);
}

function decir(texto) {
    var mensaje = new SpeechSynthesisUtterance(texto);
    
    // Configura el idioma
    mensaje.lang = 'es-419'; // Español de América Latina (código ISO 639-1)
    
    // Habilita la voz nativa si estás utilizando un navegador compatible
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
        var voices = window.speechSynthesis.getVoices();
        
        // Encuentra la voz en español de América Latina
        var vozLatam = voices.find(voice => voice.lang === 'es-419');
        
        if (vozLatam) {
            mensaje.voice = vozLatam; 
        } else {
            console.error("No se encontró una voz en español de América Latina.");
        }
    } else {
        console.error("El navegador no es compatible con la síntesis de voz.");
    }
    
    window.speechSynthesis.speak(mensaje);
}


document.addEventListener("DOMContentLoaded", function(event) {
    const buttons = document.querySelectorAll('.button');
    const items = document.querySelectorAll('.item');
    let currentImageIndex = 0;
    let intervalId;

    function showNextImage() {
        const prevIndex = (currentImageIndex === 0) ? items.length - 1 : currentImageIndex - 1;
        const nextIndex = (currentImageIndex === items.length - 1) ? 0 : currentImageIndex + 1;

        items[prevIndex].classList.remove('prev');
        items[currentImageIndex].classList.remove('active');
        items[nextIndex].classList.remove('next');

        currentImageIndex = nextIndex;

        items[prevIndex].classList.add('active');
        items[currentImageIndex].classList.add('next');
        items[nextIndex].classList.add('prev');
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(showNextImage, 3000);
    }

    intervalId = setInterval(showNextImage, 3000);

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            resetInterval();

            if (this.querySelector('i').classList.contains('zmdi-arrow-left')) {
                currentImageIndex = (currentImageIndex === 0) ? items.length - 1 : currentImageIndex - 1;
            } else {
                currentImageIndex = (currentImageIndex === items.length - 1) ? 0 : currentImageIndex + 1;
            }

            items.forEach(item => {
                item.classList.remove('active', 'next', 'prev');
            });

            const prevIndex = (currentImageIndex === 0) ? items.length - 1 : currentImageIndex - 1;
            const nextIndex = (currentImageIndex === items.length - 1) ? 0 : currentImageIndex + 1;

            items[prevIndex].classList.add('prev');
            items[currentImageIndex].classList.add('active');
            items[nextIndex].classList.add('next');
        });
    });
});

//libros lectura
document.addEventListener('DOMContentLoaded', function() {
  const parametros = new URLSearchParams(window.location.search);
  const mostrar = parametros.get('mostrar');
  const contenido = document.getElementById('contenido' + mostrar);
  if (contenido) {
    contenido.style.display = 'block';
  }
  
  document.getElementById('leer1').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=1";
  });

  document.getElementById('leer2').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=2";
  });

  document.getElementById('leer3').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=3";
  });
  document.getElementById('leer4').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=4";
  });
  document.getElementById('leer5').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=5";
  });
  document.getElementById('leer6').addEventListener('click', function() {
    window.location.href = "readbook.html?mostrar=6";
  });

  
});
// Función para comprobar si al menos una opción está seleccionada en la actividad
function checkSelection(activityId) {
    var radios = document.querySelectorAll('#' + activityId + ' input[type="radio"]');
    var button = document.querySelector('#' + activityId + ' .question-button');
    var selected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            break;
        }
    }
    if (selected) {
        button.classList.add('enabled');
        button.removeAttribute('disabled');
    } else {
        button.classList.remove('enabled');
        button.setAttribute('disabled', 'disabled');
    }
}
// Función para manejar el envío de respuestas
function enviarRespuesta(activityId) {
    var button = document.querySelector('#' + activityId + ' .question-button');
    var pregunta = document.querySelector('#' + activityId + ' h5').innerText;
    var respuesta = "";
    var radios = document.querySelectorAll('#' + activityId + ' input[type="radio"]');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            respuesta = radios[i].value;
            break;
        }
    }
    if (respuesta !== "") {
        // Mostrar la pregunta y respuesta en la sección "Hecho"
        var hechoDiv = document.getElementById('hecho');
        var echoElement = document.createElement('div');
        echoElement.classList.add('activity-card', 'hecho');
        echoElement.innerHTML = '<h5>' + pregunta + '</h5><p>Respuesta: ' + respuesta + '</p>';
        hechoDiv.appendChild(echoElement);

        // Cambiar el estilo de la tarjeta a "hecho"
        var actividad = document.getElementById(activityId);
        actividad.classList.remove('por-hacer');
        actividad.classList.add('hecho');

        // Ocultar la actividad completada en la sección "Por hacer"
        actividad.style.display = 'none';

// Verificar si estamos en la sección "Por hacer"
if (document.getElementById('por-hacer').classList.contains('show')) {
    // Verificar si no hay más actividades pendientes
    var actividadesPendientes = document.querySelectorAll('.activity-card.por-hacer');
    if (actividadesPendientes.length === 0) {
        // Ocultar todas las actividades por hacer
        var actividadesPorHacer = document.querySelectorAll('.activity-card.por-hacer');
        actividadesPorHacer.forEach(function(actividad) {
            actividad.style.display = 'none';
        });

        // Mostrar solo el div de sin-preguntas
        document.getElementById('sin-preguntas').style.display = 'block';

        // Ocultar la imagen en la sección "Hecho"
        document.querySelector('#hecho .img-finish').style.display = 'none';

        // Cambiar la visualización de las pestañas
        document.querySelector('.nav-link[href="#por-hacer"]').classList.remove('active');
        document.querySelector('.nav-link[href="#hecho"]').classList.add('active');
        
        document.querySelector('#por-hacer').classList.remove('show', 'active');
        document.querySelector('#hecho').classList.add('show', 'active');
    }
}

    }

    // Deshabilitar el botón después de enviar la respuesta
    button.classList.remove('enabled');
    button.setAttribute('disabled', 'disabled');
}
document.addEventListener("DOMContentLoaded", function() {
    const uploadButton = document.getElementById('uploadButton');
    const input = document.getElementById('uploadImage');
    const avatar = document.getElementById('avatar');
    const avatarMain = document.getElementById('avatarMain');

    // Recuperar la URL del avatar del almacenamiento local si está disponible
    const savedAvatarSrc = localStorage.getItem('avatarSrc');
    if (savedAvatarSrc) {
        avatar.src = savedAvatarSrc;
        avatarMain.src = savedAvatarSrc; // Actualiza la imagen del avatar en la página principal
    }

    uploadButton.addEventListener('click', function() {
        input.click();
    });
    
    input.addEventListener('change', function() {
        const file = this.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                avatar.src = e.target.result;
                avatarMain.src = e.target.result; // Actualiza la imagen del avatar en la página principal
                // Guardar la URL del avatar en el almacenamiento local
                localStorage.setItem('avatarSrc', e.target.result);
            };
            
            reader.readAsDataURL(file);
        }
    });

    var modal = document.getElementById("avatarModal");
    var btn = document.getElementById("open-avatar-modal");
    var span = document.getElementsByClassName("avatar-close")[0];
    var acceptBtn = document.getElementById("accept-avatar");
    var cancelBtn = document.getElementById("cancel-avatar");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    acceptBtn.onclick = function() {
        var selectedAvatar = document.querySelector('.avatar-option.selected');
        if (selectedAvatar) {
            var avatarSrc = selectedAvatar.src;
            avatar.src = avatarSrc;
            avatarMain.src = avatarSrc; // Actualiza la imagen del avatar en la página principal
            // Guardar la URL del avatar seleccionado en el almacenamiento local
            localStorage.setItem('avatarSrc', avatarSrc);
        }
        modal.style.display = "none";
    }

    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var avatarOptions = document.querySelectorAll('.avatar-option');
    avatarOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            avatarOptions.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
});
