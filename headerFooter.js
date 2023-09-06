document.addEventListener("DOMContentLoaded", function () {
  
  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `    
      <a id="logo" href="index.html">LOGOTIPO</a>
      <nav>
        <a href="about me.html">About me</a>
        <a href="galería.html">My little cat (responsive photo gallery)</a>
        <a href="Bulma.html">BULMA</a>
        <div class="switchContenedor">
          <button class="switch" id="switch"> 
            <span id="switchMessage">
              <img class="dark" src="https://derechadiario.com.ar/wp-content/plugins/wp-dark-mode/assets/images/btn-1/dark.png" alt="Dark">
            </span>
          </button>
        </div>
      </nav>
    `;
    document.body.prepend(header);

    // Agregar evento de clic al botón para cambiar entre las imágenes y el color de fondo
    const switchButton = document.getElementById("switch");
    const switchMessage = document.getElementById("switchMessage");
    let isLightMode = false; // Cambiamos el valor inicial a "false" para que inicie en modo oscuro
    switchButton.addEventListener("click", function () {
      if (isLightMode) {
        switchMessage.innerHTML = `<img class="dark" src="https://derechadiario.com.ar/wp-content/plugins/wp-dark-mode/assets/images/btn-1/dark.png" alt="Dark">`; // Cambiar a la imagen de modo oscuro
        switchButton.style.backgroundColor = "#FFFFFF"; // Cambiar el color de fondo a blanco
        document.body.classList.toggle('dark');
      } else {
        switchMessage.innerHTML = `<img class="light" src="https://derechadiario.com.ar/wp-content/plugins/wp-dark-mode/assets/images/btn-1/light.png" alt="Light">`; // Cambiar a la imagen de modo claro
        switchButton.style.backgroundColor = "grey"; // Cambiar el color de fondo a gris
        document.body.classList.toggle('dark');
      }
      isLightMode = !isLightMode; // Alternar el estado
    });
  }

  // Genera una flechita para subir al inicio de la página
  function generateUpArrow() {
    const upArrow = document.createElement('a');
    upArrow.innerHTML = `
      <a id="upButton" href="#" title="volver arriba">
        <img src="https://www.euroresidentes.com/tecnologia/trucos-diseno-web/wp-content/uploads/sites/7/2014/08/up1_azul1.png" alt="Volver arriba" />
      </a>
    `;
    document.body.appendChild(upArrow); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p>© All rights reserved 2023</p>
      <section id="redesSociales">¡Seguime en mis redes sociales!<br>
        <a href="https://www.facebook.com/daniel.cabj88" class="fa fa-facebook" title="Facebook"></a>
        <a href="https://www.instagram.com/daniel_cabj88/" class="fa fa-instagram" title="Instagram"></a>
        <a href="https://www.linkedin.com/in/danielalejandrosalas/" class="fa fa-linkedin" title="LinkedIn"></a>
        <a href="https://www.youtube.com/@daniel_cabj88" class="fa fa-youtube" title="YouTube"></a>
        <a href="mailto:daniel.salas@bue.edu.ar" class="fa fa-envelope" title="Email"></a>
      </section>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  
  // Agrega la clase "active" al enlace del menú correspondiente según la ubicación actual
  function setActiveMenuLink() {
    // Obtén la ubicación actual de la página
    var currentLocation = window.location.href;

    // Obtén todos los enlaces del menú
    var menuLinks = document.querySelectorAll("header nav a");

    // Itera a través de los enlaces del menú
    for (var i = 0; i < menuLinks.length; i++) {
      var menuLink = menuLinks[i];

      // Compara la ubicación actual con la URL del enlace
      if (currentLocation === menuLink.href) {
        // Agrega la clase "active" al enlace actual
        menuLink.classList.add("active");
      }
    }

    // Verifica si la ubicación actual es la página de inicio
    if (currentLocation.endsWith("index.html")) {
      // Obtén el enlace del logo por su id
      var logoLink = document.getElementById("logo");
      if (logoLink) {
        // Agrega la clase "active" al enlace del logo en la página de inicio
        logoLink.classList.add("active");
      }
    }
  }
  generateHeader();
  generateUpArrow();
  generateFooter();
  setActiveMenuLink();
});