const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  // using Constraint API
  isValid = form.checkValidity();
  console.log(isValid);
}

// Validate the form and store data
function processFormData(e) {
  e.preventDefault();
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);