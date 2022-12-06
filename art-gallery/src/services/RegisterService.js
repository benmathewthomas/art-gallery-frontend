// Register
export async function Register(firstName, lastName, email, password) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ firstName: firstName, lastName:lastName, email: email, password: password})
    }
    await fetch('/api/users/register/', request)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', JSON.stringify(data.token));
            data.token = "";
            localStorage.setItem('user', JSON.stringify(data));
            return data
        })
        .catch(error => {
            if (error.response) {
                console.log("error")
            }
        })
}
