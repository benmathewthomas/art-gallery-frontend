// Fetch artists from database.
export async function getArtists() {

  const response = await fetch('/api/artists')
  return await response.json();
}
