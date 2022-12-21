const AUCTION_API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';

// LISTINGS
const GET_LISTINGS_URL = `${AUCTION_API_BASE_URL}/listings`;
const GET_12_LISTINGS_BIDS_TAGS_URL = `${AUCTION_API_BASE_URL}/listings?_bids=true&tags=string&limit=12`;
// const GET_LISTINGS_DESC_URL = `${AUCTION_API_BASE_URL}/listings?sort=created&sortOrder=desc`;

// AUTHENTICATION
const POST_SIGNUP_URL = `${AUCTION_API_BASE_URL}/auth/register`;
const POST_LOGIN_URL = `${AUCTION_API_BASE_URL}/auth/login`;

// PROFILE
const GET_PROFILE_URL = `${AUCTION_API_BASE_URL}/auth/profiles`;
// const POST_BIDS_URL = `${AUCTION_API_BASE_URL}/${id}bids`;

export {
    AUCTION_API_BASE_URL,
    POST_SIGNUP_URL,
    POST_LOGIN_URL,
    GET_LISTINGS_URL,
    GET_12_LISTINGS_BIDS_TAGS_URL,
    GET_PROFILE_URL,
};
