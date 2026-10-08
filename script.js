// Mobile Menu

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});



// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let valid = true;


    // Name validation

    if (name.length < 2) {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    // Message validation

    if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;

    }


    // Final result

    if (!valid) {

        successMessage.style.color = "#ff6868";

        successMessage.textContent =
            "Please correct the errors above.";

        return;

    }


    // Success message

    successMessage.style.color = "#b6ff4a";

    successMessage.textContent =
        `Thank you, ${name}! Your message has been submitted successfully.`;



    // Clear form

    form.reset();

});