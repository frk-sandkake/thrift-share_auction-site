import '../style.css';
import createNavMobile from "./components/mobileNav";
import createNavDesktop from './components/headerNav';
import { clearDataFromStorage } from "./utils/storage";
import { menuOpen, menuClose } from './utils/mobileNavControll';

createNavMobile();
createNavDesktop();

const logOutBtn = document.getElementById('logoutBtn');

function logOutUser() {
    clearDataFromStorage();
    window.location.replace('/index.html');
}

if(logOutBtn) {
    logOutBtn.addEventListener('click', () => {
        logOutUser();
    });
}
const burgerBtn = document.getElementById('hamburger');
burgerBtn.addEventListener('click', menuOpen);

const closeNavBtn = document.getElementById('closeNavBtn');
closeNavBtn.addEventListener('click', menuClose);

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

closeModalBtn.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener('click', () => {
        logInModal.classList.add('hidden');
        signUpModal.classList.add('hidden');
    });
});
