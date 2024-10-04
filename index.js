document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const number = document.getElementById('number').value.trim();
        const password = document.getElementById('password').value.trim();

        clearErrors();

        let hasErrors = false;

        if (!firstName) {
            showError('firstName', "First Name is required.");
            hasErrors = true;
        }
        if (!lastName) {
            showError('lastName', "Last Name is required.");
            hasErrors = true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('email', "Please enter a valid email address.");
            hasErrors = true;
        }

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(number)) {
            showError('number', "Please enter a valid phone number (10 digits).");
            hasErrors = true;
        }

        if (password.length < 8) {
            showError('password', "Password must be at least 8 characters long.");
            hasErrors = true;
        }

        if (!hasErrors) {
            const userData = {
                first_name: firstName,
                last_name: lastName,
                phone_number: number,
                email: email,
                password: password
            };
            console.log(userData);
        }
    });

    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorField = document.createElement('span');
        errorField.className = 'error-message';
        errorField.textContent = message;
        inputField.parentElement.appendChild(errorField);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (message) {
            message.remove();
        });
    }
});
