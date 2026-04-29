const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    if (passwordInput.value.trim() === "") {
        alert("Please enter your password.");
        return;
    }

    
    alert("Form submitted successfully!");
});