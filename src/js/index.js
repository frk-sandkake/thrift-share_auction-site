import '../style.css';
import createNavMobile from './components/mobileNav';
import createNavDesktop from './components/headerNav';
import { clearDataFromStorage } from './utils/storage';
import { menuOpen, menuClose } from './utils/mobileNavControll';

/** HeaderNavigation */
createNavMobile();
createNavDesktop();

const burgerBtn = document.getElementById('hamburger');
burgerBtn.addEventListener('click', () => {
    menuOpen();
});

const closeNavBtn = document.getElementById('closeNavBtn');
closeNavBtn.addEventListener('click', () => {
    menuClose();
});

function logOutUser() {
    clearDataFromStorage();
    window.location.replace('/index.html');
}
const logOutBtn = document.querySelector('#logoutBtn, #logOutBtn');
if (logOutBtn) {
    logOutBtn.addEventListener('click', () => {
        logOutUser();
    });
}
/** HeaderNavigation - END */

/** Modals - LogIn SignUp */
const logInBtn = document.querySelectorAll('#loginBtn, .login-btn');
const signUpBtn = document.querySelectorAll('#signupBtn, .signup-btn');
const logInModal = document.getElementById('loginModal');
const signUpModal = document.getElementById('signupModal');
const closeModalBtn = document.querySelectorAll('.exit-modal');

logInBtn.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        logInModal.classList.remove('hidden');
        signUpModal.classList.add('hidden');
    });
});

signUpBtn.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        signUpModal.classList.remove('hidden');
        logInModal.classList.add('hidden');
    });
});

closeModalBtn.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        logInModal.classList.add('hidden');
        signUpModal.classList.add('hidden');
    });
});
/** Modals - LogIn SignUp - END */
