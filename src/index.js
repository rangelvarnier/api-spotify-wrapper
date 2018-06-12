import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from './search'

import {
  getAlbum,
  getAlbums,
  getAlbumTracks
} from './album'

// module.exports = {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchTracks,
//   searchPlaylists,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks
// }

import { API_URL } from './config'

export default class SpotifyWrapper {
  constructor (options) {
    this.apiURL = options.apiURL || API_URL
    this.token = options.token
  }

  request (url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    return fetch(url, headers)
  }
}
