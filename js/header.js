document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  header.innerHTML = `
    <div class="header-container">
      <a href="./" class="logo">
        <span class="logo-text">Domain.com</span>
      </a>
      <div class="burger-menu" aria-label="Toggle navigation">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </div>
      <ul class="nav-menu">
        <li><a href="./" class="nav-link">Garage</a></li>
        <li><a href="/road-log.html" class="nav-link">Road Log</a></li>
        <li><a href="/contacts-point.html" class="nav-link">Call Center</a></li>
        <li><a href="./#how-to-play" class="nav-link">How to Ride</a></li>
        <li><a href="/offroad-disclaimer.html" class="nav-link">Disclaimer Station</a></li>
      </ul>
    </div>
  `;

  // Mobile menu functionality
  const burgerMenu = header.querySelector(".burger-menu");
  const navMenu = header.querySelector(".nav-menu");

  burgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      burgerMenu.classList.remove("active");
    }
  });

  // Close mobile menu when window is resized to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      burgerMenu.classList.remove("active");
    }
  });
});
