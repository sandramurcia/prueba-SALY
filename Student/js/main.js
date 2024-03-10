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


// carrusel home
document.addEventListener("DOMContentLoaded", function(event) {
const buttons = document.querySelectorAll('.button');
const items = document.querySelectorAll('.item');
let currentImageIndex = 0;

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

const intervalId = setInterval(showNextImage, 3000); 

buttons.forEach(button => {
button.addEventListener('click', function() {
    clearInterval(intervalId); 
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

    intervalId = setInterval(showNextImage, 3000);
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
