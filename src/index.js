/* global fetch */
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from './search'

import album from './album'
import { API_URL } from './config'

export default class SpotifyWrapper {
  constructor (options) {
    this.apiURL = options.apiURL || API_URL
    this.token = options.token
    this.album = album.bind(this)()
  }

  async request (url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
    await fetch(url, headers)
  }
}
