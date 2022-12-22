const navMenuMobile = document.getElementById('navMobile');

function menuOpen() {
    navMenuMobile.classList.remove('hidden');
}

function menuClose() {
    navMenuMobile.classList.add('hidden');
}

export { menuOpen, menuClose };
