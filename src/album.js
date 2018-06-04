import fetch from 'node-fetch'
import {API_URL, HEADERS} from './config'

export const getAlbum = async id => {
  const searchData = await fetch(`${API_URL}/albums/${id}`, HEADERS)
  return searchData.json()
}

export const getAlbums = async ids => {
  const searchData = await fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS)
  return searchData.json()
}

export const getAlbumTracks = async id => {
  const searchData = await fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
  return searchData.json()
}
