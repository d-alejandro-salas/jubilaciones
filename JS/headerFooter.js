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

  // Agrega el ícono al título de la página
  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/jpeg';
  favicon.href = './Images/logo.jpg';
  document.head.appendChild(favicon);

  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `    
      <a id="logo" href="index.html"><img src="./Images/logo.jpg" alt=""></a>
      <nav>
        <a href="jubilaciones.html">JUBILATE</a>
        <a href="reajusteHaberes.html">HABER MENSUAL</a>
        <a href="#redesSociales" onclick="highlightSection()">CONTACTATE</a>
        <a href="nosotros.html">NOSOTROS</a>
        <a href="#enlaces" onclick="highlightSection()">SITIOS DE INTERÉS</a>
      </nav>`;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
      <a style="display: scroll; position: fixed; bottom: 10px; left: 15px;z-index: 9999;" href="#" title="volver arriba">
        <img src="https://www.euroresidentes.com/tecnologia/trucos-diseno-web/wp-content/uploads/sites/7/2014/08/up1_azul1.png" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491132140614" class="btn-wsp" target="_blank">
        <i class="fa fa-whatsapp icono"></i>
      </a>
      <div class="footer__container">
        <section id="redesSociales">
          <h3>CONTACTO - REDES SOCIALES</h3><br>
          <ul class="redesSociales__ul">
            <li><a href="https://www.facebook.com/jubilamosok" class="fa fa-facebook" title="Facebook"></a></li>
            <li><a href="https://www.instagram.com/jubilamos" class="fa fa-instagram" title="Instagram"></a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5491132140614" class="fa fa-whatsapp" title="WhatsApp"></a></li>
            <li><a href="mailto:jubilamosinf@hotmail.com" class="fa fa-envelope" title="Email"></a></li>
          </ul><br>
          <p style="text-align:justify;">Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/jubilamos" title="Instagram">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, ☎️ llamada directa al 1132140614 o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.</p>
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
          <p>
            <span style="cursor:pointer;" onclick="toggleMap()">Av. Santa Fe 1845</span><span id="verMapa" style="display:none;"> (hacé click para visualizar el mapa)</span>, Ciudad Autónoma de Buenos Aires.<br>(sólo con cita previa) y delegados en todo el país. 
          </p>
          <br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3349961380827!2d-58.3938796!3d-34.5956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705924921762!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
      <br><br><br><br><hr><br>
      <p style="text-align: center; font-size: smaller;">
    Web Developer <a class="copyright__a" href="https://drive.google.com/file/d/1JvKXVXbLuJM6whTgIW7sI9gLW1nE9W_H/view?usp=drive_link">Daniel Alejandro</a>,
    contrataciones: <a href="mailto:daniel.salas@bue.edu.ar">daniel.salas@bue.edu.ar</a>.
    © All rights reserved <span id="yearPlaceholder"></span>.</p>
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
