import SpotifyWrapper from '../src/index'
import fetch from 'node-fetch'
global.fetch = fetch
jest.mock('node-fetch')

describe('SpotifyWrappr Library', () => {
  test('should create an instance og SpotifyWrapper', () => {
    let spotity = new SpotifyWrapper({})
    expect(spotity).toBeInstanceOf(SpotifyWrapper)
  })

  test('should create an instance og SpotifyWrapper', () => {
    let spotity = new SpotifyWrapper({
      apiURL: 'urlapispotify'
    })
    expect(spotity.apiURL).toEqual('urlapispotify')
  })

  test('should use the default apiUrl if not provided', () => {
    let spotity = new SpotifyWrapper({})
    expect(spotity.apiURL).toEqual('https://api.spotify.com/v1')
  })

  test('should receive token as an option', () => {
    let spotity = new SpotifyWrapper({ token: 'foo' })
    expect(spotity.token).toEqual('foo')
  })
})

describe('Request method', () => {
  beforeEach(() => {
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

  test('should have request method', () => {
    let spotity = new SpotifyWrapper({})
    expect(spotity.request).toBeDefined()
  })

  test('should call fetch function', () => {
    let spotity = new SpotifyWrapper({
      token: 'foo'
    })
    spotity.request('url')
    expect(fetch).toBeCalled()
  })

  test('should call fetch with headers', () => {
    let spotity = new SpotifyWrapper({
      token: 'foo'
    })

    const headers = {
      headers: {
        Authorization: `Bearer foo`
      }
    }

    spotity.request('url')
    expect(fetch).toBeCalledWith('url', headers)
  })
})
