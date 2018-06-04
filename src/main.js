import fetch from 'node-fetch'
import {API_URL, HEADERS} from './config'

export const search = async (query, type) => {
  const searchData = await fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
  return searchData.json()
}
export const searchArtists = (query) => search(query, 'artist')
export const searchAlbums = (query) => search(query, 'album')
export const searchTracks = (query) => search(query, 'track')
export const searchPlaylists = (query) => search(query, 'playlist')
