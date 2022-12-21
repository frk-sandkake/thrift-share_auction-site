import { GET_PROFILE_URL } from "./settings/api";


const userNameTitle = document.getElementById('userNameTitle');
const userAvatar = document.getElementById('userAvatar');
const credits = document.getElementById('credits');
// const avatarEditForm = document.getElementById('avatarEditForm');
// const avatarEdit = document.getElementById('avatarEdit');
// const avatarEditBtn = document.getElementById('confirmEdit');

const addThriftBtn = document.getElementById('addThriftBtn');
const addThriftModal = document.getElementById('addThriftModal');
const exitThriftModal = document.getElementById('exitThriftAdd');
const editAvatarBtn = document.getElementById('avatarEditBtn');
const editAvatarModal = document.getElementById('avatarEditModal');
const exitAvatarModal = document.querySelector('#exitAvatarEdit');

/** Open/Close addThriftModal - End */
addThriftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addThriftModal.showModal();
});
exitThriftModal.addEventListener('click', (e) => {
    e.preventDefault();
    addThriftModal.close();
});
/** Open/Close addThriftModal - End */

/** Open/Close editAvatarModal */
editAvatarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editAvatarModal.showModal();
});
exitAvatarModal.addEventListener('click', (e) => {
  e.preventDefault();
    editAvatarModal.close();
});
/** Open/Close editAvatarModal - End */
