// Fetch exhibitions from database.
export async function getExhibitions() {
  const response = await fetch('/api/exhibitions')
  return await response.json();
}

// Post exhibition to database.
export async function postExhibition(name, description, backgroundImageUrl) {
  var token = localStorage.getItem('token');
  console.log(token)
  token = token.replace(/^"(.*)"$/, '$1');
  console.log(token)
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name: name, description: description, backgroundImageUrl: backgroundImageUrl })
  }
  await fetch('/api/exhibitions', request)
    .then(response => response.json())
    .then(data => { return data });
}