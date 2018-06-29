import SpotifyWrapper from '../src/index'
import fetch from 'node-fetch'
global.fetch = fetch
jest.mock('node-fetch')

describe('Main', () => {
  let spotify
  const headers = {
    headers: {
      Authorization: `Bearer foo`
    }
  }
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    })

    fetch
      .mockReturnValue(Promise.resolve({
        json: () => {
          return { body: 'json' }
        }
      }))
  })

  afterEach(() => {
    fetch.mockReset()
  })

  describe('Search', () => {
    describe('Smoke tests', () => {
      test('should exist the search Albuns method', () => {
        expect(spotify.search.albums).toBeDefined()
      })

      test('should exist the search Artists method', () => {
        expect(spotify.search.artists).toBeDefined()
      })

      test('should exist the search Tracks method', () => {
        expect(spotify.search.tracks).toBeDefined()
      })

      test('should exist the search Playlists method', () => {
        expect(spotify.search.playlists).toBeDefined()
      })
    })

    describe('Search artists', () => {
      test('should call fetch function', () => {
        spotify.search.artists()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        spotify.search.artists('zztop')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist', headers)

        spotify.search.artists('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=artist', headers)
      })
    })

    describe('Search albums', () => {
      test('should call fetch function', () => {
        spotify.search.albums()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        spotify.search.albums('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=album', headers)

        spotify.search.albums('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=album', headers)
      })
    })

    describe('Search tracks', () => {
      test('should call fetch function', () => {
        spotify.search.tracks()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        spotify.search.tracks('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=track', headers)

        spotify.search.tracks('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=track', headers)
      })
    })
    describe('Search playlists', () => {
      test('should call fetch function', () => {
        spotify.search.playlists()
        expect(fetch).toBeCalled()
      })

      test('should call fetch with the correct url', () => {
        spotify.search.playlists('metallica')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=metallica&type=playlist', headers)

        spotify.search.playlists('acdc')
        expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=acdc&type=playlist', headers)
      })
    })
  })
})
