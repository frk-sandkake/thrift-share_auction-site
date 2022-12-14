import timeFormat from './utils/timeDateFormat';
import { GET_12_LISTINGS_BIDS_TAGS_URL } from './settings/api';

const allThriftsUl = document.getElementById('allThrifts');
const errorMessage = document.getElementById('errorMessage');

const showThriftsDataHTML = (thrifts) => {
    allThriftsUl.innerHTML = '';
    if (!thrifts.length) {
        errorMessage.innerHTML = 'Sorry, could not find any thrifts';
    } else {
        const thriftsHTML = thrifts
            .map(({ id, title, endsAt, bids, tags, _count, media }) => {
                // Time is shown in format: "Dec 8, 12 AM"
                const endTime = timeFormat(endsAt);

                let tag = 'Tag';
                const [first] = tags;
                if (!first) {
                    `Tag`;
                } else {
                    tag = first;
                }
                const ifTag = tag;

                // shows how many has bid on listing
                const bidCounter = _count.bids;
                // Sorts the bids so highest is shown in current bid and history
                const sortedBids = bids;
                sortedBids.sort((x, y) => y.amount - x.amount);
                // Updates the highest bid, shows 0 if no bids
                let currentBid = 0;
                const [first1] = bids;
                if (!first1) {
                    `${0}`;
                } else {
                    currentBid = first1.amount;
                }
                const newCurrentBid = currentBid;
                // Shows history of bids with name of bidder and amount
                const bidderInfo = sortedBids
                    .map(
                        ({ bidderName, amount }) =>
                            `<li class="flex flex-row justify-between"><p class="text-sm">${bidderName}</p><p class="text-sm font-semibold">$${amount}</p></li>`
                    )
                    .join('');

                let thriftImage = `<img class="rounded-lg object-cover w-full h-[200px]" src="${media[0]}" alt="Thrift Image"/>`;
                if (!media[0]) {
                    thriftImage = `<img class="rounded-lg object-cover w-full h-[200px]" src="https://res.cloudinary.com/dmurhab0f/image/upload/v1669892589/milivoj-kuhar-radio-unsplash.jpg" alt="Default image"/>`;
                }

                return `
            <li class="col-span-1">
              <article id="thriftCard" aria-label="Product card" class="p-2 rounded-lg shadow-lg bg-zinc-800 text-amber-50 min-w-[20rem] max-w-[22rem] lg:p-4">
                <div role="none" aria-label="Product card">
                  <a href="single-item.html?id=${id}" class="block">${thriftImage}</a>
                  <div role="none" aria-label="Info about thrift and auction" class="w-12/12 px-2 py-2">
                    <a aria-label="Tags" href="#" class="pt-2 text-xs capitalize font-semibold hover:text-cyan-200">
                      #${ifTag}
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
            })
            .join('');
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
        console.log(thrifts);
    } else {
        const errMessage = `I'm sorry but ${thrifts.errors[0].message}`;
        throw Error(errMessage);
    }
}

getAllThrifts().then(() => {});
