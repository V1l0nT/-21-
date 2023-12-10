"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const phoneRegex = /^\+\d{1,3}\s?\d{1,}([-.\s]?\d{1,}){0,}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{3,}$/;
        let errorMessage = '';
        if (!username || !password) {
            errorMessage = 'Пожалуйста, заполните все поля.';
        } else if (!phoneRegex.test(username.trim())) {
            errorMessage = 'Пожалуйста, введите корректный номер телефона. Пример: +71233211234';
        } else if (!passwordRegex.test(password.trim())) {
            errorMessage = 'Пожалуйста, введите корректный пароль. Минимум 3 символа, 1 цифра, 1 заглавная буква. Только на английском';
        }
        if (errorMessage) {
            alert(errorMessage);
            event.preventDefault();
        } else {
            alert('Форма отправлена успешно!');
        }
    });
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.getElementById('showPassword');
    showPasswordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
});