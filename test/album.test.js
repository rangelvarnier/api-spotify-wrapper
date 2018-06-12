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

  describe('Smoke tests', () => {
    test('should exist the getAlbum method', () => {
      expect(spotify.album.getAlbum).toBeDefined()
    })

    test('should exist the getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).toBeDefined()
    })
  })

  describe('getAlbum', () => {
    test('should call fetch function', () => {
      spotify.album.getAlbum()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      spotify.album.getAlbum('0Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvY', headers)

      spotify.album.getAlbum('1Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/1Em8m9kRctyH9S3MTXAHvY', headers)
    })
  })

  describe('getAlbums', () => {
    test('should call fetch function', () => {
      spotify.album.getAlbum()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      spotify.album.getAlbums('2MwXhrFs7QdXKBYqJ9JxtI')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=2MwXhrFs7QdXKBYqJ9JxtI', headers)

      spotify.album.getAlbums(['2MwXhrFs7QdXKBYqJ9JxtI', '1Em8m9kRctyH9S3MTXAHvY'])
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=2MwXhrFs7QdXKBYqJ9JxtI,1Em8m9kRctyH9S3MTXAHvY', headers)
    })
  })

  describe('getAlbumTracks', () => {
    test('should call fetch function', () => {
      spotify.album.getAlbumTracks()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      spotify.album.getAlbumTracks('0Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvY/tracks', headers)

      spotify.album.getAlbumTracks('0Em8m9kRctyH9S3MTXAHvh')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvh/tracks', headers)
    })
  })
})
