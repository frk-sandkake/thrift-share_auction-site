import {POST_SIGNUP_URL} from "./settings/api";
import { checkLength, emailValid, matchPasswords } from './utils/validation';
import postSignUp from "./utils/fetchSignup";

const signupForm = document.getElementById('signUpForm');
const errorMessage = document.getElementById('errorMessageSignUp');
const userName = document.getElementById('userName');
const errorName = document.getElementById('errorName');
const email = document.getElementById('emailSignUp');
const errorEmail = document.getElementById('errorEmailSignUp');
const password = document.getElementById('passwordCreate');
const errorPasswordCreate = document.getElementById('errorPasswordCreate');
const passwordVerify = document.getElementById('passwordVerify');
const errorPasswordVerify = document.getElementById('errorPasswordVerify');


signupForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (checkInputsSignUp()) {
    const userData = {
      name: userName.value,
      email: email.value,
      password: password.value,
    };

    const USER_SIGNUP_URL = `${POST_SIGNUP_URL}`;
    postSignUp(userData, USER_SIGNUP_URL)
      .then((response) => {
      signupForm.reset();
      location.href = '/';
    }).catch((errMessage) => {
      errorMessage.innerHTML = `${errMessage}`;
    });
  } else {
    errorMessage.innerHTML = 'Validation failed..';
  }
});

function checkInputsSignUp() {
  let validInput = false;
  if (checkLength(userName.value, 2)) {
    userName.classList.add('text-green-500', 'border-green-500');
    errorName.classList.add('hidden');
    validInput = true;
  } else {
    userName.classList.add('text-red-500', 'border-red-500');
    errorName.classList.remove('hidden');
  }

  if (checkLength(email.value, 1)) {
    errorEmail.classList.add('hidden');
    validInput = true;
  } else {
    email.classList.add('text-red-500', 'border-red-500');
    errorEmail.classList.remove('hidden');
  }

  if (checkLength(email.value, 1) && emailValid(email.value) === true) {
    email.classList.add('text-green-500', 'border-green-500');
    errorEmail.classList.add('hidden');
    validInput = true;
  } else if (checkLength(email.value, 1) && emailValid(email.value) !== true) {
    email.classList.add('text-red-500', 'border-red-500');
    errorEmail.classList.remove('hidden');
  }

  if (checkLength(password.value, 8)) {
    password.classList.add('text-green-500', 'border-green-500');
    errorPasswordCreate.classList.add('hidden');
    validInput = true;
  } else {
    password.classList.add('text-red-500', 'border-red-500');
    errorPasswordCreate.classList.remove('hidden');
  }

  if (matchPasswords(password.value, passwordVerify.value)) {
    password.classList.add('text-green-500', 'border-green-500');
    passwordVerify.classList.add('text-green-500', 'border-green-500');
    errorPasswordVerify.classList.add('hidden');
    validInput = true;
  } else {
    password.classList.add('text-red-500', 'border-red-500');
    passwordVerify.classList.add('text-red-500', 'border-red-500');
    errorPasswordVerify.classList.remove('hidden');
  }

  return validInput;
}
