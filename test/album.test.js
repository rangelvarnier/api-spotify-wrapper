import {
  getAlbum,
  getAlbums,
  getAlbumTracks
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

  describe('Smoke tests', () => {
    test('should exist the getAlbum method', () => {
      expect(getAlbum).toBeDefined()
    })

    test('should exist the getAlbumTracks method', () => {
      expect(getAlbumTracks).toBeDefined()
    })
  })

  describe('getAlbum', () => {
    test('should call fetch function', () => {
      getAlbum()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      getAlbum('0Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvY', HEADERS)

      getAlbum('1Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/1Em8m9kRctyH9S3MTXAHvY', HEADERS)
    })
  })

  describe('getAlbums', () => {
    test('should call fetch function', () => {
      getAlbum()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      getAlbums('2MwXhrFs7QdXKBYqJ9JxtI')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=2MwXhrFs7QdXKBYqJ9JxtI', HEADERS)

      getAlbums(['2MwXhrFs7QdXKBYqJ9JxtI', '1Em8m9kRctyH9S3MTXAHvY'])
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=2MwXhrFs7QdXKBYqJ9JxtI,1Em8m9kRctyH9S3MTXAHvY', HEADERS)
    })
  })

  describe('getAlbumTracks', () => {
    test('should call fetch function', () => {
      getAlbumTracks()
      expect(fetch).toBeCalled()
    })

    test('should have call with correct URL', () => {
      getAlbumTracks('0Em8m9kRctyH9S3MTXAHvY')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvY/tracks', HEADERS)

      getAlbumTracks('0Em8m9kRctyH9S3MTXAHvh')
      expect(fetch).toBeCalledWith('https://api.spotify.com/v1/albums/0Em8m9kRctyH9S3MTXAHvh/tracks', HEADERS)
    })
  })
})
