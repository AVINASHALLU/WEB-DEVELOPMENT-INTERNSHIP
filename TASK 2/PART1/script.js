document.getElementById('registrationForm').addEventListener('submit', function (event) {
  const email = document.getElementById('email').value;
  const errorMessage = document.getElementById('error-message');
  
  // Basic email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    event.preventDefault(); // Prevent form from submitting
  } else {
    errorMessage.textContent = ""; // Clear error if valid
  }
});
