import { getUserNameStorage } from '../utils/storage';

function createNavMobile() {
    const { pathname } = document.location;
    const navMobil = document.getElementById('navMobile');

    if (navMobil) {
        const userName = getUserNameStorage();
        let navMobileLinks;
        navMobileLinks = `
            <li role="menuitem">
                <a role="link" href="/index.html" class="${
                    pathname === '/index.html' ? 'text-cyan-300 underline' : 'hover:text-cyan-300'
                }">
                      Thrifts
                </a>
            </li>
            <li role="menuitem">
                <a role="link" href="/" class="${
                    pathname === '/' ? 'text-cyan-300 underline' : 'hover:text-cyan-300'
                }">
                      About Us
                </a>
            </li>
            <li role="group" class="flex flex-col justify-center items-center gap-4">
                <button id="loginBtn" class="login-btn hover:text-cyan-300">
                    Log In
                </button>
                <button id="signupBtn" class="signup-btn btn btn-pink w-56">
                    Sign Up
                </button>          
            </li>
        `;

        if (userName) {
            navMobileLinks = `
                <li role="menuitem">
                    <a role="link" href="/index.html" class="${
                        pathname === '/index.html'
                            ? 'text-cyan-300 underline'
                            : 'hover:text-cyan-300'
                    }">
                          Home
                    </a>
                </li>
                 <li role="menuitem">
                    Some other page
                </li>
                <li role="group">
                    <a role="link" href="/profile.html" class="${
                        pathname === '/profile.html'
                            ? 'text-cyan-300 underline'
                            : 'hover:text-cyan-300'
                    }">
                         ${userName}
                    </a>
                    <button id="logoutBtn" class="hover:text-pink-700">
                          LogOut
                    </button>
                </li>
               
          `;
        }
        navMobil.innerHTML = `
          <ul id="menuMobile" role="menu" role="list" class="absolute top-0 right-0 w-10/12 h-screen overflow-hidden transition-all text-center flex flex-col justify-evenly py-8 bg-zinc-800">
               ${navMobileLinks}
          </ul>
          <button
              id="closeNavBtn"
              type="button"
              aria-controls="navMobile"
              class="absolute z-30 top-14 right-4 text-zinc-50 hover:text-cyan-300"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-8 h-8 m-2 sm:m-4"
                >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                      clip-rule="evenodd"
                    />
                </svg>
                <span class="sr-only">Close Menu</span>
            </button>
        `;
    }
}

export default createNavMobile;
