async function postSignUp(userData, POST_SIGNUP_URL) {
    const response = await fetch(POST_SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const jsonResponse = await response.json();
    if (response.ok) {
        return jsonResponse;
    }
    throw Error(`I'm sorry but ${jsonResponse.errors[0].message}`);
}

export default postSignUp;
