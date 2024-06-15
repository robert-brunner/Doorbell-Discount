// Initialize EmailJS with your user ID
(function() {
    emailjs.init('Kv8nOyeiROsarNF9x'); // Replace with your actual user ID
})();

function generateRandomCode() {
    // Generate a random 6-digit code
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendEmail(e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const email = form.email.value;
    const name = form.name.value;
    const randomCode = generateRandomCode();

    // Create the email parameters
    const templateParams = {
        name: name,
        to_email: email, // Pass the recipient's email
        random_code: randomCode
    };

    // Send the email using EmailJS
    emailjs.send('service_5wewv7i', 'template_ui6tumg', templateParams) // Use the correct service and template ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send email. Please try again.');
        });

    // Reset the form after submission
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', sendEmail);
});
