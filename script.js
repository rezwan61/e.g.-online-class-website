// Form validation for the Contact Us page
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert("Please fill in all fields.");
        } else {
            alert("Thank you for your message, " + name + "!");
            // Here you can add code to send the form data to a server
            form.reset(); // Reset the form after submission
        }
    });
});

