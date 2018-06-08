import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/index'
import {HEADERS} from '../src/config'

import fetch from 'node-fetch'
global.fetch = fetch
jest.mock('node-fetch')

describe('Main', () => {
  beforeEach(() => {
    fetch
      .mockReturnValue(Promise.resolve({ json: () => {
        return {body: 'json'}
      }}))
  })

  afterEach(() => {
    fetch.mockReset()
  })

  describe('Search', () => {
    describe('Smoke tests', () => {
      test('should exist the search method', () => {
        expect(search).toBeDefined()
      })

      test('should exist the searchAlbuns method', () => {
        expect(searchAlbums).toBeDefined()
      })

      test('should exist the searchArtists method', () => {
        expect(searchArtists).toBeDefined()
      })

      test('should exist the searchTracks method', () => {
        expect(searchTracks).toBeDefined()
      })

      test('should exist the searchPlaylists method', () => {
        expect(searchPlaylists).toBeDefined()
      })
    })

    describe('Generic Search', () => {
      test('should call fetch function', () => {
        search()
        expect(fetch).toBeCalled()
      })

      describe('should receive de correct url to fetch', () => {
        test('passing one type', () => {
          search('zztop', 'artist')
          expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist', HEADERS)

          search('zztop', 'album')
          expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=zztop&type=album', HEADERS)
        })

        test('passing more than one type', () => {
          search('zztop', ['artist,album'])
          expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist,album', HEADERS)
        })
      })

      test('should return the JSON data from the Promise', () => {
        const artist = search('zztop', 'artist')
        expect(artist).resolves.toEqual({body: 'json'})
      })
    })

    describe('Search artists', () => {
      test('should call fetch function', () => {
        searchArtists()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        searchArtists('zztop')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist', HEADERS)

        searchArtists('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=artist', HEADERS)
      })
    })

    describe('Search albums', () => {
      test('should call fetch function', () => {
        searchAlbums()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        searchAlbums('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=album', HEADERS)

        searchAlbums('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=album', HEADERS)
      })
    })

    describe('Search tracks', () => {
      test('should call fetch function', () => {
        searchTracks()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        searchTracks('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=track', HEADERS)

        searchTracks('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=track', HEADERS)
      })
    })
    describe('Search playlists', () => {
      test('should call fetch function', () => {
        searchPlaylists()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        searchPlaylists('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=playlist', HEADERS)

        searchPlaylists('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=playlist', HEADERS)
      })
    })
  })
})
