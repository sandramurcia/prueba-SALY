document.addEventListener('DOMContentLoaded', function() {
  const parametros = new URLSearchParams(window.location.search);
  const mostrar = parametros.get('mostrar');
  const contenido = document.getElementById('contenido' + mostrar);
  if (contenido) {
    contenido.style.display = 'block';
  }
  
  document.getElementById('leer1').addEventListener('click', function() {
    window.location.href = "contenido-p.html?mostrar=1";
  });

  document.getElementById('leer2').addEventListener('click', function() {
    window.location.href = "contenido-p.html?mostrar=2";
  });

  document.getElementById('leer3').addEventListener('click', function() {
    window.location.href = "contenido-p.html?mostrar=3";
  });
});
