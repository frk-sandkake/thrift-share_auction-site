import { GET_LISTINGS_URL } from './settings/api';
import timeFormat from './utils/timeDateFormat';
import getCrumbs from './components/breadCrumbNav';

const errorMessage = document.querySelector('#errorMessage');
const tagsList = document.getElementById('tagLinksWrapper');
const pageTitle = document.querySelector('title');
const itemsTitle = document.getElementById('itemsTitle');
const thriftId = document.getElementById('thriftId');
const descriptionBody = document.getElementById('descriptionBody');
const imageGallery = document.getElementById('imageGallery');

const sellerImgSrc = document.getElementById('sellerAvatar');
const sellerInfo = document.getElementById('sellerInfo');

const timeEndsAt = document.getElementById('timeEndsAt');
const bidCounts = document.getElementById('bidCounts');
const currentHighBid = document.getElementById('currentBid');
const bidderList = document.getElementById('bidderListUL');

const getId = new URLSearchParams(window.location.search).get('id');
const GET_THRIFT_ID_URL = `${GET_LISTINGS_URL}/${getId}?_seller=true&_bids=true&tags=string`;
console.log(pageTitle);

const getThriftDetails = async () => {
    const response = await fetch(`${GET_THRIFT_ID_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // console.log(response);
    const thriftData = await response.json();

    if (response.ok) {
        const { id, title, tags, description, media, endsAt, bids, _count, seller } = thriftData;
        // console.log(thriftData);
        getCrumbs(thriftData); // breadCrumbNav.js
        pageTitle.innerHTML = `${title}`;
        document.title = `${title}`;

        /** All about the thrift */
        itemsTitle.innerHTML = `${title}`;
        thriftId.innerHTML = `ID: <small class="invisible transition-all group-hover:visible">${id}</small>  `;

        let tag = 'Tag';
        const [first] = tags;
        if (!first) {
            tag = `Tag`;
        } else {
            tag = first;
        }
        const ifTag = tag;
        tagsList.innerHTML = `<li><a aria-label="Tags" href="#" class="pt-2 text-sm capitalize font-semibold hover:text-cyan-200 md:text-base">#${ifTag}</a></li>`;

        if (!description) {
            descriptionBody.innerHTML = `No thrift description on this one`;
        } else {
            descriptionBody.innerHTML = `${description}`;
        }

        let thriftImage = `<img class="rounded-lg object-cover w-full max-h-72" src="${media[0]}" alt="Thrift Image"/>`;
        if (!media[0]) {
            thriftImage = `<img class="rounded-lg object-cover w-full max-h-72" src="https://res.cloudinary.com/dmurhab0f/image/upload/v1669892589/milivoj-kuhar-radio-unsplash.jpg" alt="Default image"/>`;
        }
        imageGallery.innerHTML = `${thriftImage}`;
        /** All about the thrift - End */

        // console.log(getId, singleThriftContainer, errorMessage, pageTitle);
        // console.log(GET_12_LISTINGS_BIDS_TAGS_URL, GET_LISTINGS_URL);

        /** All about the Bids */
        const endTime = timeFormat(endsAt); // "Dec 8, 12 AM"
        timeEndsAt.innerHTML = `${endTime}`;

        const sortedBids = bids; // Sorts bids; highest nr 1
        sortedBids.sort((x, y) => y.amount - x.amount);
        console.log(bids);

        let currentBid = 0; // Updates the highest bid, shows 0 if no bids
        const [first1] = bids;
        if (!first1) {
            currentBid = `${0}`;
        } else {
            currentBid = first1.amount;
        }
        const newCurrentBid = currentBid;
        currentHighBid.innerHTML = `$ ${newCurrentBid}`;

        const bidCounter = _count.bids; // Shows nr of bids
        bidCounts.innerHTML = `${bidCounter} Bids`;
        // Bid history, with name of bidder and amount
        const bidderInfo = sortedBids
            .map(
                (x) =>
                    `<li class="flex flex-row justify-between"><p class="text-sm">${x.bidderName}</p><p class="text-sm font-semibold">$${x.amount}</p></li>`
            )
            .join('');
        bidderList.innerHTML = `${bidderInfo}`;
        /** All about the Bids - End */

        /** All about the Seller */
        const getSellerAvatar = seller.avatar;
        let sellerAvatar = `
                    <img
                    src="${getSellerAvatar}"
                    class="col-start-2 col-end-3 row-span-3 rounded-md w-16 h-16 shadow-lg sm:col-start-3 sm:col-end-4 sm:w-24 sm:h-24 md:w-28 md:h-28 md:col-span-2"
                    alt="Seller avatar"
                    />
    `;
        if (!getSellerAvatar) {
            sellerAvatar = `<img class="rounded-lg object-cover w-full h-48 md:h-52" src="https://res.cloudinary.com/dmurhab0f/image/upload/v1669892589/milivoj-kuhar-radio-unsplash.jpg" alt="Default Avatar"/>`;
        }
        sellerImgSrc.innerHTML = `${sellerAvatar}`;

        const sellerName = seller.name;
        const sellerEmail = seller.email;
        const sellerNameEmail = `
                        <p class="text-base text-amber-100 sm:text-lg">${sellerName}</p>
                        <p class="text-xs font-thin"><em>${sellerEmail}</em></p>
    `;

        sellerInfo.innerHTML = `${sellerNameEmail}`;
        /** All about the Seller - End */

        console.log(sellerName, sellerEmail);
        console.log(newCurrentBid);
        console.log(thriftData);
    } else {
        const errMessage = `I'm sorry but ${thriftData.errors[0].message}`;
        errorMessage.innerHTML = `${errMessage}`;
        throw Error(errMessage);
    }
};

getThriftDetails().then((r) => {});
