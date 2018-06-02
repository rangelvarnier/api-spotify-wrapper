import fetch from 'node-fetch'

export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json())
    .catch(error => console.log(error))
export const searchAlbuns = () => { }
export const searchArtists = () => { }
export const searchTracks = () => { }
export const searchPlaylists = () => { }
