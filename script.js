// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  
  // Contact form submission handling
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();  // Prevent page refresh
  
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Log form data to the console (simulating form submission)
      console.log(`New message from ${name} (${email}): ${message}`);
  
      // Display confirmation message
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent =
        "Thank you for contacting me! I will get back to you soon.";
      responseMessage.style.display = "block";
  
      // Clear form fields
      contactForm.reset();
    });
  

  });
