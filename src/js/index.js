import '../style.css';
import {menuOpen, menuClose} from "./utils/mobileNavControll";

const burgerBtn = document.getElementById('hamburger');
burgerBtn.addEventListener('click', menuOpen);

const closeNavBtn = document.getElementById('closeNavBtn');
closeNavBtn.addEventListener('click', menuClose)
