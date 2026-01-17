function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const successMessage = document.getElementById('successMessage');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passError.style.display = 'none';
    successMessage.style.display = 'none';

    let isValid = true;

    if (username.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (password.length < 6) {
        passError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
    }

    return isValid;
}
