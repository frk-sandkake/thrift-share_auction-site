import timeFormat from './utils/timeDateFormat';
import { GET_12_LISTINGS_BIDS_TAGS_URL } from './settings/api';

const allThriftsUl = document.getElementById('allThrifts');
const errorMessage = document.getElementById('errorMessage');

const showThriftsDataHTML = (thrifts) => {
  allThriftsUl.innerHTML = '';
  if (!thrifts.length) {
        errorMessage.innerHTML = 'Sorry, could not find any thrifts';
  } else {
    const thriftsHTML = thrifts.map(({ id, title, endsAt, bids, tags, _count, media }) => {
      const endTime = timeFormat(endsAt);

      let thriftImage = `<img class="rounded-lg object-cover w-full h-[168px]" src="${media[0]}" alt="Thrift Image"/>`;
      if (!media[0]) {
        thriftImage = `
          <img class="rounded-lg object-cover w-full h-[168px]" src="https://res.cloudinary.com/dmurhab0f/image/upload/v1669892589/milivoj-kuhar-radio-unsplash.jpg" alt="Default image"/>
          `
        ;
      }

      let tag1 = '#';
      let tag2 = '#';
      let tag3 = '#';

      if (tags && tags.length >= 3) {
        [tag1, tag2, tag3] = tags.slice(0, 3).map(tag => `#${tag}`);
      }

        const bidCounter = _count.bids;

      let sortedBids = [];
      if (typeof bids !== 'undefined') {
        sortedBids = bids.sort((x, y) => y.amount - x.amount);
      }

      const currentBid = sortedBids.length > 0 ? sortedBids[0].amount : 0;
      const newCurrentBid = currentBid;
      const bidderInfo = sortedBids.map(({ bidderName, amount }) => `
          <li class="flex flex-row justify-between gap-1">
            <p class="text-sm">${bidderName}</p><p class="text-sm font-semibold">$${amount}</p>
          </li>
        `
      ).join('');

      return `
        <li class="col-span-1 px-2">
          <article id="thriftCard" aria-label="Product card" class="p-2 rounded-lg shadow-lg bg-zinc-800 text-amber-50 min-w-[18rem] max-w-[22rem]">
            <div role="none" aria-label="Product card content">
              <a href="single-item.html?id=${id}" class="block">${thriftImage}</a>
              <div role="none" aria-label="Info about thrift and auction" class="w-12/12 px-2 py-2">
                <div aria-label="tags and charity" role="group" class="flex flex-row justify-between items-center">
                  <ul class="flex flex-row gap-1">
                    <li>
                      <a aria-label="Tags" href="#" class="text-xs capitalize font-semibold hover:text-cyan-200">
                        ${tag1}
                      </a>
                    </li>
                    <li>
                      <a aria-label="Tags" href="#" class="text-xs capitalize font-semibold hover:text-cyan-200">
                        ${tag2}
                      </a>
                    </li>
                    <li>
                      <a aria-label="Tags" href="#" class="text-xs capitalize font-semibold hover:text-cyan-200">
                        ${tag3}
                      </a>
                    </li>
                  </ul>
                  <p class="charity-link">
                    <a href="#" class="text-xs">
                      AwesomeCharity 40%
                    </a>
                  </p>
                </div>
                <h3 class="text-amber-200 text-lg font-semibold">${title}</h3>
                <div role="group" aria-label="Bid information" class="py-2 flex flex-col gap-4">
                  <div role="group" aria-label="Current Bid and bid history" class="w-full flex flex-row justify-between items-start gap-4 py-2">
                    <details id="viewBids" aria-label="View bids history" class="cursor-pointer text-amber-50">
                      <summary class="w-36 inline-flex btn p-[2px_2px] text-cyan-300 group bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 hover:bg-gradient-to-br hover:text-amber-50 focus:text-amber-50">
                        <span role="presentation"
                          class="w-full inline-flex justify-between items-center overflow-hidden p-[2px_16px] transition-all ease-in duration-75 bg-zinc-800 rounded-lg group-hover:bg-opacity-0 group-focus:bg-gradient-to-r">
                          <span class="text-xs inline-block font-semibold">
                            Bids: ${bidCounter}
                          </span>
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-mr-1 w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </summary>
                      <ul role="list" aria-label="Bidders and amount" class="flex flex-col gap-1 bg-transparent mx-1 p-1">
                          ${bidderInfo}
                      </ul>
                    </details>
                    <p class="w-full text-end text-amber-50 text-lg font-bold">
                      $ ${newCurrentBid}
                    </p>
                  </div>
                  <div class="w-full pb-2">
                    <button id="addBid" aria-label="Bid button and end time for auction" type="button"
                        class="w-full inline-block btn btn-pink"
                        >
                        Bid before: ${endTime}
                    </button>
                  </div
                </div>
              </div>
            </div>
          </article>
        </li>
      `;
    }).join('');
    allThriftsUl.insertAdjacentHTML('beforeend', thriftsHTML);
  }
};

async function getAllThrifts() {
    const response = await fetch(GET_12_LISTINGS_BIDS_TAGS_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const thrifts = await response.json();
    if (response.ok) {
        showThriftsDataHTML(thrifts);
    } else {
        const errMessage = `I'm sorry but ${thrifts.errors[0].message}`;
        throw Error(errMessage);
    }
}

getAllThrifts().then(() => {});
