"use strict";

// Función personalizada para buscar texto en el contenido de los elementos
// Esta función solo buscará coincidencias exactas y distingue mayúsculas de minúsculas
HTMLElement.prototype.containsText = function(text) {
  return this.innerText.includes(text);
};

document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el contenido del elemento h1
  var pageTitle = document.querySelector('h1').innerText;

  // Capitaliza el primer carácter y convierte el resto a minúsculas
  pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1).toLowerCase();

  // Actualiza el título de la página con el formato deseado
  document.title = 'JUBILAMOS - ' + pageTitle;

  // Agrega el resto de tu código aquí, como enlaces a Font Awesome, estilos, etc.
  var fontAwesomeKitScript = document.createElement('script');
  fontAwesomeKitScript.src = 'https://kit.fontawesome.com/2c36e9b7b1.js';
  fontAwesomeKitScript.crossOrigin = 'anonymous';
  document.head.appendChild(fontAwesomeKitScript);

  var fontAwesomeRegularStylesheet = document.createElement('link');
  fontAwesomeRegularStylesheet.rel = 'stylesheet';
  fontAwesomeRegularStylesheet.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
  document.head.appendChild(fontAwesomeRegularStylesheet);

  var customStylesheet = document.createElement('link');
  customStylesheet.rel = 'stylesheet';
  customStylesheet.type = 'text/css';
  customStylesheet.href = 'Styles/style.css';
  document.head.appendChild(customStylesheet);

// Agregar un <span class="enterprise"> alrededor de cada instancia de la palabra "Jubilamos" y subraya "Anses"
var elementsWithJubilamos = document.querySelectorAll('*');
elementsWithJubilamos.forEach(function(element) {
  if (element.textContent.includes("Jubilamos")) {
    var span = document.createElement('span');
    span.className = 'enterprise';
    element.innerHTML = element.innerHTML.replace(/Jubilamos/g, '<span class="enterprise">Jubilamos</span>');
  }
  if (element.textContent.includes("ANSES")) {
    element.innerHTML = element.innerHTML.replace(/ANSES/g, "<u>ANSES</u>");
  }
});


  // Agregar la metaetiqueta que falta
  var metaViewport = document.createElement('meta');
  metaViewport.setAttribute('charset', 'utf-8');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(metaViewport);
});

function toggleMap() {
  var mapa = document.getElementById('mapa');
  mapa.classList.toggle('activo');
}