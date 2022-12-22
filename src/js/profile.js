import { GET_PROFILE_URL } from './settings/api';
import { getToken, getUserNameStorage } from './utils/storage';

const accessToken = getToken();
const getName = getUserNameStorage();

const userNameTitle = document.getElementById('userNameTitle');
const userAvatarSrc = document.getElementById('userAvatar');
const creditsContainer = document.querySelector('#credits');

const GET_PROFILE_INFO_URL = `${GET_PROFILE_URL}/${getName}?_listings=true`;

async function getUserInfo() {
    const response = await fetch(`${GET_PROFILE_INFO_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const userData = await response.json();
    if (response.ok) {
        const { name, avatar, credits } = userData;

        userNameTitle.innerHTML = `${name}`;
        creditsContainer.innerHTML = `<p class="text-base text-end font-inria-serif font-semibold text-fuchsia-400 sm:text-lg">Credits: ${credits}</p>`;

        let userAvatar = `
                    <img
                          src="${avatar}"
                          class="object-cover rounded-md"
                          alt="Avatar"
                        />
    `;
        if (!userAvatar) {
            userAvatar = `<img class="rounded-lg object-cover w-full h-48 md:h-52" src="https://res.cloudinary.com/dmurhab0f/image/upload/v1669892589/milivoj-kuhar-radio-unsplash.jpg" alt="Default Avatar"/>`;
        }
        userAvatarSrc.innerHTML = `${userAvatar}`;
    } else {
        const errMessage = `I'm sorry but ${userData.errors[0].message}`;
        throw Error(errMessage);
    }
}
getUserInfo().then();

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

// STILL WORKING ON THIS!
/**
 async function getUserThrifts() {
  const response = await fetch(`${GET_PROFILE_THRIFTS_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response);
  console.log(accessToken);
  const thriftsData = await response.json()
  if (response.ok) {
    console.log(thriftsData);
    if (!thriftsData.length) {
      console.log('somethings wrong..');
    } else {
      const { id, title, tags, media, } = thriftsData;
      console.log(id, title, tags, endsAt, media);
      const endTime = timeFormat(endsAt); // "Dec 8, 12 AM"
      const myThriftHTML = `
<li class="col-span-1">
    <article id="thriftCard" aria-label="Product card" class="p-2 rounded-lg shadow-lg bg-zinc-800 text-amber-50 min-w-[20rem] max-w-[22rem] lg:p-4">
      <div role="none" aria-label="Product card">
        <a href="single-item.html?id=${id}" class="block"></a>
        <div role="none" aria-label="Info about thrift and auction" class="w-12/12 px-2 py-2">
          <a aria-label="Tags" href="#" class="pt-2 text-xs capitalize font-semibold hover:text-cyan-200">
            #Tags
          </a>
          <h3 class="text-amber-200 text-xl font-semibold mb-2">${title}</h3>
          <p class="font-inria-serif text-end text-sm font-light bg-gradient-to-r from-cyan-400 to-amber-300 text-transparent bg-clip-text hover:bg-gradient-to-t">
            <a href="#" class="pr-1">
              NameOfCharity
            </a>
            40%
          </p>
          <ul role="group" aria-label="Current bid and auction end time" class="p-2 mb-2">
            <li aria-label="Current Bid" class="text-center">
              <p class="inline-block">
                Currant Bid:
              </p>
              <p class="inline-block text-lg font-semibold">
                $ ${newCurrentBid}
              </p>
            </li>
            <li aria-label="Auction end time" class="text-center">
              <p class="inline-block text-sm">
                Auction end:
              </p>
              <p class="inline-block text-base font-semibold">
                ${endTime}
              </p>
            </li>
          </ul>
          <div role="group" aria-label="Buttons View and/or Add bid" class="flex flex-row justify-around items-start">
            <details id="viewBids" aria-label="View bids history" class="cursor-pointer text-amber-50">
              <summary class="inline-flex justify-center items-center gap-2 pt-2 pb-2 px-6 rounded-full bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 hover:bg-gradient-to-br drop-shadow-sm focus:ring-2 focus:outline-none focus:ring-cyan-300">
                        <span class="text-sm inline-block font-semibold pb-0.5 sm:text-base">
                          ${bidCounter} Bids
                        </span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mr-1 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </summary>
              <ul role="list" aria-label="Bidders and amount" class="flex flex-col gap-1 bg-transparent mx-1 p-1">
                ${bidderInfo}
              </ul>
            </details>
            <button id="addBid" type="button"
                    class="inline-block rounded-full p-0.5 text-pink-400 drop-shadow-sm group bg-gradient-to-r from-pink-400 via-pink-600 to-pink-700 group-hover:bg-gradient-to-br hover:text-pink-50 focus:ring-2 focus:outline-none focus:ring-pink-300"
            >
                              <span class="inline-flex items-center gap-1 overflow-hidden py-1.5 px-3.5 transition ease-in duration-75 bg-zinc-800 rounded-full group-hover:bg-opacity-0">
                                  <span class="inline-block text-sm font-semibold pb-0.5 sm:text-base">
                                    Add Bid
                                  </span>
                                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block -mr-1 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  </li>
    `;
      myThrifts.innerHTML += myThriftHTML;
    }
    }
}
 getUserThrifts().then();

 // const avatarEditForm = document.getElementById('avatarEditForm');
 // const avatarEdit = document.getElementById('avatarEdit');
 // const avatarEditBtn = document.getElementById('confirmEdit');
 // const GET_PROFILE_THRIFTS_URL = `${GET_PROFILE_URL}/${getName}/listings`;
 import timeFormat from "./utils/timeDateFormat";
 const myThrifts = document.querySelector('#myThrifts');
 const errorMessage = document.querySelector('#errorMessage');
 */
