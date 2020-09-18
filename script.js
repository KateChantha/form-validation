const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
  // using Constraint API
  isValid = form.checkValidity();
  // Style main message for a validation error message
  message.textContent = 'Please fill out all fields';
  message.style.color = 'white';
  messageContainer.style.backgroundColor = 'red';
  messageContainer.style.borderColor = 'red';
}

// Validate the form and store data
function processFormData(e) {
  e.preventDefault();
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);