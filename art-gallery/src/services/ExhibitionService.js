// Fetch exhibitions from database.
export async function getExhibitions() {

  const response = await fetch('/api/exhibitions')
  return await response.json();
}

// Post exhibition to database.
export function postExhibition(name, description, backdropImageURL) {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ name: name, description: description, backdropImageURL: backdropImageURL })
  }
  fetch('/api/exhibitions', request)
    .then(response => response.json())
    .then(data => { return data.id });
}