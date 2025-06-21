document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission
    document.getElementById('formStatus').textContent = "Thank you for your message!";
    document.getElementById('contactForm').reset();
});