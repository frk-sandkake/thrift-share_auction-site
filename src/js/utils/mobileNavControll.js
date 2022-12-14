const navMenuMobile = document.getElementById('navMobile');
const mobileHeader = document.getElementById('mobileHeader');

function menuOpen() {
    navMenuMobile.style.height = '100vh';
    mobileHeader.style.position = 'fixed';

}

function menuClose() {
    navMenuMobile.style.height = '64px';
    mobileHeader.style.position = 'relative';
}

export { menuOpen, menuClose };
