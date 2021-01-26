const email = document.getElementById('mail');
const emailError = document.getElementById('mailError')

const country = document.getElementById('country');
const countryError = document.getElementById('contryError')

const postalCode = document.getElementById('postalCode');
const postalCodeError = document.getElementById('postalCodeError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const form = document.querySelector('form');
const submitError =  document.getElementById('submitError')

email.addEventListener('input', function(e) {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    showEmailError();
  }
})

postalCode.addEventListener('input', function(e) {
  if (postalCode.validity.valid) {
    postalCodeError.textContent = '';
  } else {
    showPostalCodeError();
  }
})

password.addEventListener('input', function(e) {
  if (password.validity.valid) {
    passwordError.textContent ='';
  } else {
    showPasswordError();
  }

  if (confirmPasswordError !== '') {
    if (password.value === confirmPassword.value) {
      confirmPasswordError.textContent = ''
    }
  }
})

confirmPassword.addEventListener('input', function(e) {
  if (password.value !== '' && confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Password does not match'
  } else {
    confirmPasswordError.textContent = '';
  }
  console.log(password.value);
  console.log(confirmPassword.value);
})

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email address required';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address'
  }
}

function showPostalCodeError() {
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = 'Postal code required';
  } else if (postalCode.validity.patternMismatch) {
    postalCodeError.textContent = 'Pelase enter a valid postal code'
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password Required';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters long`
  } 
}

form.addEventListener('submit', function(e) {
  if ( !email.validity.valid || !postalCode.validity.valid || !password.validity.valid || password.value !== confirmPassword.value ) {
    e.preventDefault();
    submitError.textContent = 'Please fill out all fields correctly';
  } else {
    e.preventDefault();
    submitError.textContent = 'Submission Successful'
  }
}) 

