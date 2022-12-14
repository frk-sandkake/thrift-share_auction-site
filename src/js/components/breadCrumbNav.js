function getCrumbs(thriftData) {
    const { pathname } = document.location;
    const breadCrumbs = document.getElementById('breadCrumb');
    breadCrumbs.innerHTML = '';
    if (breadCrumbs.id) {
        const { title } = thriftData;
        const crumbLinks = `
            <li class="text-sm font-semibold">
                <a href="/index.html" class="${
                    pathname === '/index.html'
                        ? 'inline-block text-zinc-500 hover:text-gray-900'
                        : 'text-zinc-700 hover:text-gray-900'
                }">
                      <svg class="inline-block w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      Home
                </a>
            </li>
            <li aria-current="page" class="text-sm font-medium">
                 <a id="current-page" href="/single-item.html" class="${
                     pathname === '/single-item.html' ? 'inline-block' : 'text-zinc-600'
                 } text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                     <svg class="inline-block w-[16px] h-[16px] text-zinc-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                     ${title}
                </a>
            </li>
            `;
        breadCrumbs.innerHTML = `<ol class="flex flex-row justify-start items-center gap-1">${crumbLinks}</ol>`;
    }
}

export default getCrumbs;
