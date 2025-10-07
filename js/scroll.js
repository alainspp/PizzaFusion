document.addEventListener("DOMContentLoaded", () => {
    const whatsappIcon = document.getElementById("float");
    
    window.addEventListener("scroll", () => {
      // Verifica si el usuario ha hecho scroll más de 100px
      if (window.scrollY > 800) {
        whatsappIcon.classList.remove("hidden");
        whatsappIcon.classList.add("visible");
      } else {
        whatsappIcon.classList.remove("visible");
        whatsappIcon.classList.add("hidden");
      }
    });
  });
  