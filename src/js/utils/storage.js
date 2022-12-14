const tokenKey = 'token';
const userKey = 'user';

function saveDataToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function saveToken(token) {
  saveDataToStorage(tokenKey, token);
}

export function saveUserToStorage(user) {
  saveDataToStorage(userKey, user);
}
