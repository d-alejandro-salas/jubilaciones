"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // Función para agregar la clase destacado a la sección adecuada
  function highlightSection() {
    const redesSocialesSection = document.getElementById('redesSociales');
    const enlacesSection = document.getElementById('enlaces');
    const currentHash = window.location.hash;

    // Remueve la clase destacado de todas las secciones
    redesSocialesSection.classList.remove('destacado');
    enlacesSection.classList.remove('destacado');

    // Agrega la clase destacado según el fragmento actual
    if (currentHash === '#redesSociales') {
      redesSocialesSection.classList.add('destacado');
    } else if (currentHash === '#enlaces') {
      enlacesSection.classList.add('destacado');
    }
  }

  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `    
      <a id="logo" href="index.html"><img src="./Images/logo.jpg" alt=""></a>
      <nav>
        <a href="jubilate.html">JUBILATE</a>
        <a href="haberMensual.html">HABER MENSUAL</a>
        <a href="#redesSociales" onclick="highlightSection()">CONTACTATE</a>
        <a href="#enlaces" onclick="highlightSection()">SITIOS DE INTERÉS</a>
        <a href="nosotros.html">NOSOTROS</a>
      </nav>`;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
      <div class="footer__container">
        <section id="redesSociales">
          <h3>CONTACTO - REDES SOCIALES</h3><br>
          <ul class="redesSociales__ul">
            <li><a href="https://www.facebook.com/jubilamosok" class="fa fa-facebook" title="Facebook"></a></li>
            <li><a href="https://www.instagram.com/jubilamos" class="fa fa-instagram" title="Instagram"></a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5491132140614" class="fa fa-whatsapp" title="WhatsApp"></a></li>
            <li><a href="mailto:jubilamosinf@hotmail.com" class="fa fa-envelope" title="Email"></a></li>
          </ul><br>
          <p>Puedes contactarnos a través de Facebook, Instagram, WhatsApp o llamada directa al 
            <a href="https://api.whatsapp.com/send/?phone=5491132140614">1132140614</a> o por <a href="mailto:jubilamosinf@hotmail.com">mail</a>.</p>
        </section>
        <section id="enlaces">
          <h3>SITIOS DE INTERÉS</h3><br>
          <ul>
            <li><a href="https://www.pjn.gov.ar/" target="_blank">PODER JUDICIAL</a></li>
            <li><a href="https://www.anses.gob.ar/" target="_blank">ANSES</a></li>
            <li><a href="https://www.pami.org.ar/" target="_blank">PAMI</a></li>
          </ul>
        </section>
        <section id="mapa">
          <h3>NUESTRAS OFICINAS</h3><br>
          <p>Av. Santa Fe 1845, Ciudad Autónoma de Buenos Aires.<br>(solo con cita previa)</p>
          <br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3351718014364!2d-58.396454525147035!3d-34.595685157072516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705080950195!5m2!1ses-419!2sar" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
      <p style="text-align: center;">Web Developer <a class="copyright__a" href="https://drive.google.com/file/d/1JvKXVXbLuJM6whTgIW7sI9gLW1nE9W_H/view?usp=drive_link">Daniel Alejandro</a>, contrataciones: <a href="mailto:daniel.salas@bue.edu.ar">daniel.salas@bue.edu.ar</a>. © All rights reserved <span id="yearPlaceholder"></span>.</p>
      `;
    document.body.append(footer);

    // Obtén el elemento del marcador de posición del año y el año actual
    var yearPlaceholder = document.getElementById("yearPlaceholder");
    var currentYear = new Date().getFullYear();

    // Coloca el año actual en el marcador de posición
    yearPlaceholder.textContent = currentYear; // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body

    // Verifica el fragmento de la URL al cargar la página
    highlightSection();

    // Agrega un event listener al evento hashchange
    window.addEventListener('hashchange', highlightSection);
  }

  generateHeader();
  generateFooter();
});
