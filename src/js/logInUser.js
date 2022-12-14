import { POST_LOGIN_URL } from './settings/api';
import { checkLength, emailValid } from './utils/validation';
import { saveToken, saveUserToStorage } from "./utils/storage";
import postLogIn from './utils/fetchLogin';

const logInForm = document.getElementById('logInForm');
const errorMessage = document.getElementById('errorMessageLogIn');
const email = document.getElementById('emailLogIn');
const errorEmail = document.getElementById('errorEmailLogIn');
const password = document.getElementById('password');
const errorPasswordCreate = document.getElementById('errorPassword');

function checkInputsLogIn() {
    let validLogInInput = false;
    if (checkLength(email.value, 1)) {
        errorEmail.classList.add('hidden');
        validLogInInput = true;
    } else {
        email.classList.add('text-red-500', 'border-red-500');
        errorEmail.classList.remove('hidden');
    }

    if (checkLength(email.value, 1) && emailValid(email.value) === true) {
        email.classList.add('text-green-500', 'border-green-500');
        errorEmail.classList.add('hidden');
        validLogInInput = true;
    } else if (checkLength(email.value, 1) && emailValid(email.value) !== true) {
        email.classList.add('text-red-500', 'border-red-500');
        errorEmail.classList.remove('hidden');
        validLogInInput = true;
    }

    if (checkLength(password.value, 8)) {
        password.classList.add('text-green-500', 'border-green-500');
        errorPasswordCreate.classList.add('hidden');
        validLogInInput = true;
    } else {
        password.classList.add('text-red-500', 'border-red-500');
        errorPasswordCreate.classList.remove('hidden');
    }
    return validLogInInput;
}

if(logInForm) {
    logInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (checkInputsLogIn()) {
            const userData = {
                email: email.value,
                password: password.value,
            };
           // async fetch in /utils/fetchLogin.js
            const USER_LOGIN_URL_ENDPOINT = `${POST_LOGIN_URL}`;
            postLogIn(userData, USER_LOGIN_URL_ENDPOINT).then((logInUserData) => {
                saveToken(logInUserData.accessToken);
                saveUserToStorage(logInUserData.userToSave);
                location.href = '/index.html';
            }).catch((errMessage) => {
                errorMessage.innerHTML = `${errMessage}`;
            })
        } else {
            errorMessage.innerHTML = 'Did you forget something? :)'
        }
    });
}
