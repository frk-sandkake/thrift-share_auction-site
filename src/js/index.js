import '../style.css';
import { menuOpen, menuClose } from './utils/mobileNavControll';

const burgerBtn = document.getElementById('hamburger');
burgerBtn.addEventListener('click', menuOpen);

const closeNavBtn = document.getElementById('closeNavBtn');
closeNavBtn.addEventListener('click', menuClose);

const logInBtn = document.querySelectorAll('.login-btn');

logInBtn.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const logInModal = document.getElementById('loginModal');
        logInModal.classList.remove('hidden');
        const closeModalBtn = document.querySelectorAll('.exit-modal');
        closeModalBtn.forEach((closeModalBtn) => {
            closeModalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                logInModal.classList.add('hidden');
            });
        });
    });
});

const signUpBtn = document.querySelectorAll('.signup-btn');

signUpBtn.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const signUpModal = document.getElementById('signupModal');
        signUpModal.classList.remove('hidden');
        const closeModalBtn = document.querySelectorAll('.exit-modal');
        closeModalBtn.forEach((closeModalBtn) => {
            closeModalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                signUpModal.classList.add('hidden');
            });
        });
    });
});
