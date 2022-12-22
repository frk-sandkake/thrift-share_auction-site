const AUCTION_API_BASE_URL = 'https://api.noroff.dev/api/v1/auction';

// LISTINGS
const GET_LISTINGS_URL = `${AUCTION_API_BASE_URL}/listings`;
const GET_12_LISTINGS_BIDS_TAGS_URL = `${AUCTION_API_BASE_URL}/listings?sort=created&_bids=true&tags=string&limit=12`;
const POST_THRIFT_URL = `${AUCTION_API_BASE_URL}/listings`;

// AUTHENTICATION
const POST_SIGNUP_URL = `${AUCTION_API_BASE_URL}/auth/register`;
const POST_LOGIN_URL = `${AUCTION_API_BASE_URL}/auth/login`;

// PROFILE
const GET_PROFILE_URL = `${AUCTION_API_BASE_URL}/profiles`;

export {
    AUCTION_API_BASE_URL,
    POST_SIGNUP_URL,
    POST_LOGIN_URL,
    GET_LISTINGS_URL,
    GET_12_LISTINGS_BIDS_TAGS_URL,
    GET_PROFILE_URL,
    POST_THRIFT_URL,
};
