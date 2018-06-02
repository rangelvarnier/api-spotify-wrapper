import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main'

import fetch from 'node-fetch'
jest.mock('node-fetch')
fetch
  .mockReturnValue(Promise.resolve({ json: () => {
    return {body: 'json'}
  }}))

describe('Main', () => {
  describe('Spotfy Wrapper', () => {
    describe('Smoke tests', () => {
      test('should exist the search method', () => {
        expect(search).toBeDefined()
      })

      test('should exist the searchAlbuns method', () => {
        expect(searchAlbuns).toBeDefined()
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
          expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist')

          search('zztop', 'album')
          expect(fetch).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=zztop&type=album')
        })

        test('passing more than one type', () => {
          search('zztop', ['artist, album'])
          expect(fetch).toBeCalledWith('https://api.spotify.com/v1/search?q=zztop&type=artist')
        })
      })

      test('should return the JSON data from the Promise', () => {
        const artist = search('zztop', 'artist')
        expect(artist).resolves.toEqual({body: 'json'})
      })
    })
  })
})
