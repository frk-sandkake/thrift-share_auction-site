const tokenKey = 'token';
const userKey = 'user';

/** Save Data to localStorage */
function saveDataToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function saveToken(token) {
    saveDataToStorage(tokenKey, token);
}

export function saveUserToStorage(user) {
    saveDataToStorage(userKey, user);
}

/** Get Data from localStorage */
function getDataFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return [];
}

export function getUserNameStorage() {
    const user = getDataFromStorage(userKey);
    if (userKey) {
        return user.name;
    }
    return null;
}

export function clearDataFromStorage() {
    localStorage.clear();
}
