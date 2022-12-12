const AUCTION_API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';

// LISTING
const GET_LISTINGS_URL = `${AUCTION_API_BASE_URL}/listings`;
const GET_12_LISTINGS_BIDS_TAGS_URL = `${AUCTION_API_BASE_URL}/listings?_bids=true&tags=string&limit=12`;

export { AUCTION_API_BASE_URL, GET_LISTINGS_URL, GET_12_LISTINGS_BIDS_TAGS_URL };
