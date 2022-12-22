function checkLength(value, len) {
    return value.trim().length >= len;
}

function emailValid(email) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
    return !!email.match(regEx);
}

function matchPasswords(password, confirmPassword) {
    if (!password) {
        return false;
    }
    if (!confirmPassword) {
        return false;
    }
    return password === confirmPassword;
}

const checkImgUrl = (url) => {
    const urlPattern = /https?:\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%-]))?/;
    if (typeof url === 'object') {
        return urlPattern.test(url.value);
    }
    return urlPattern.test(url);
};

export { checkLength, emailValid, matchPasswords, checkImgUrl };
