const navMenuMobile = document.getElementById('navMobile');
const mobileHeader = document.getElementById('mobileHeader');

function menuOpen() {
  navMenuMobile.style.width = '100%';
  mobileHeader.style.position = 'fixed';
  mobileHeader.style.top = '0';
}

function menuClose() {
  navMenuMobile.style.width = '0';
  mobileHeader.style.position = 'relative';
}

export { menuOpen, menuClose }