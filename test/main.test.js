import {search, searchAlbuns, searchArtists, searchTracks, searchPlaylists} from '../src/main'

describe('Main', () => {
  describe('Spotfy Wrapper', () => {
    describe('smoke tests', () => {
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
  })
})
