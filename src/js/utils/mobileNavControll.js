const navMenuMobile = document.getElementById('navMobile');

function menuOpen() {
    navMenuMobile.style.height = '100vh';
}

function menuClose() {
    navMenuMobile.style.height = '56px';
}

export { menuOpen, menuClose };
