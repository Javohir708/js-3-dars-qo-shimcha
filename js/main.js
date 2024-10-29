document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('.home-link'); 
  const links = document.querySelectorAll('.navbar__link');
  const headerHeight = document.querySelector('.header').offsetHeight;

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      
      const targetId = this.getAttribute("href").substring(1);
      
      if (targetId === "top") { 
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".navbar__menu");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {

      navbar.classList.toggle("navbar--open");
      if (navbar.classList.contains("navbar--open")) {
        this.style.zIndex = "100000"; //
        this.innerHTML = "&times;"; // 
      } else {
          this.innerHTML = '<i class="fa-solid fa-bars" style="color: #ffd43b"></i>'; 
      }
  });
});


