// Service to handle logging in and out
export const userService = {
    Login,
    Logout,
    SignUp
};

async function Login(email, password) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ email: email, password: password})
    };

    await fetch('/api/users/login/', request)
        // .then(response => response.json())
        .then(handleLoginResponse)
        .then(data => {
            if (data.item2) {
                localStorage.setItem('user', JSON.stringify(data.item1));
                localStorage.setItem('token', JSON.stringify(data.item2));
            }
            return data
        })
}

function Logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    location.reload(true);
}

function handleLoginResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                Logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

// Register a new account using the sign up api
export async function SignUp(firstName, lastName, email, password) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ firstName: firstName, lastName:lastName, email: email, password: password})
    }
    await fetch('/api/users/signup/', request)
        .then(handleSignupResponse);
}

function handleSignupResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                Logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
