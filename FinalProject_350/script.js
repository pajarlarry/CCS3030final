// JavaScript for Page Navigation
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Show the landing page by default
showPage('landing-page');

function validateRegisterForm(event) {
  event.preventDefault(); // Prevent form submission
  
  const fullName = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email-address').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const errorMessage = document.getElementById('error-message');
  
  // Clear previous error message
  errorMessage.textContent = '';

  // Validation checks
  if (fullName === '') {
    errorMessage.textContent = 'Full Name is required.';
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long.';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return;
  }

  // Successful registration message
  alert('Registration successful!');
  document.querySelector('.register-form').reset(); // Reset form fields
}

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
