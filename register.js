const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        window.location.href = 'home.html';
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = phone => {
    const re = /^\d{12}$/;
    const startsWithZero = phone.startsWith('0');
    return re.test(phone) && startsWithZero;
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email must ends with @gmail.com');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Phone number must starts with 0 and length of 12');
        isValid = false;
    } else {
        setSuccess(phone);
    }

    if (countryValue === '') {
        setError(country, 'Country is required');
        isValid = false;
    } else {
        setSuccess(country);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {

      setError(password2, "Passwords don't match");
    } else {
      setSuccess(password2);
    }
    return isValid;
  };
