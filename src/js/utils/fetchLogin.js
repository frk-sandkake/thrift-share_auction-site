async function postLogIn(userData, POST_LOGIN_URL) {
    const response = await fetch(POST_LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const jsonLogin = await response.json();
    if (jsonLogin.accessToken) {
        const userToSave = {
            name: jsonLogin.name,
            email: jsonLogin.email,
        }
        let logInUserData;
        logInUserData = {
            userToSave,
            accessToken: jsonLogin.accessToken
        };
        return logInUserData;
    }
    throw Error(`I'm sorry but ${jsonLogin.errors[0].message}`);
}

export default postLogIn;
