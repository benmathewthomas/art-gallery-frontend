// Login
export async function Login(email, password) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ email: email, password: password})
    }
    await fetch('/api/users/login/', request)
        .then(response => {
            if(response.data) {
                console.log("here")
                localStorage.setItem('token', JSON.stringify(response.data.token));
                response.data.token = "";
                localStorage.setItem('user', JSON.stringify(response.data));
                // update nav
            }
        })
        .catch(error => {
            if (error.response) {
                console.log("error")
            }
        })
}
