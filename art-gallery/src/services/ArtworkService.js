// Fetch artworks from database.
export async function getArtworks() {

  const response = await fetch('/api/artworks')
  return await response.json();
}