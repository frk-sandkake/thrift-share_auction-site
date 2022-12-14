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
            <li role="group" class="flex flex-col gap-4">
                <button id="loginBtn" class="login-btn hover:text-cyan-300">
                    Log In
                </button>
                <button id="signupBtn" class="signup-btn btn btn-pink">
                    Sign Up
                </button>          
            </li>
        `;

    if (userName) {
      navMobileLinks = `
                <li role="menuitem">
                    <a role="link" href="/index.html" class="${
        pathname === '/index.html'
          ? 'min-w-[132px] max-w-[180px]'
          : 'min-w-[132px] max-w-[180px]'
      }"
                    > 
                        <img
                            src="/logo-thrift-share.svg"
                            alt="Thrift & Share logo"
                            width="594"
                            height="208"   
                            class="min-w-[132px] max-w-[180px]"                   
                        />
                        <span class="sr-only">Logo</span>
                      </a>
                </li>
                <li role="menuitem">
                    <a role="link" href="/index.html" class="${
        pathname === '/index.html' ? 'text-cyan-300 underline' : 'hover:text-cyan-300'
      }">
                          Home
                    </a>
                </li>
                <li role="menuitem">
                    <a role="link" href="/profile.html" class="${
        pathname === '/profile.html' ? 'text-cyan-300 underline' : 'hover:text-cyan-300'
      }">
                         ${userName}
                    </a>
                </li>
                <li role="menuitem">
                    <button id="logoutBtn" class="hover:text-pink-700">
                          LogOut
                    </button>
                </li>
          `;
    }
    navMobil.innerHTML = `
          <ul id="menuMobile" role="menu" role="list" class="overflow-auto transition-all w-screen h-screen text-center flex flex-col justify-between py-8 bg-zinc-800">
               ${navMobileLinks}
          </ul>
        `;
  }
}

export default createNavMobile;
