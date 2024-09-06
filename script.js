document.getElementById("colorButton").addEventListener("click", function() {
    const homeSection = document.getElementById("home");
    homeSection.style.color = homeSection.style.color === "blue" ? "black" : "blue";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    document.getElementById("formResponse").textContent = `Merci ${name}, votre message a été envoyé avec succès !`;
});
