import SpotifyWrapper from '../src/index'

global.fetch = require('node-fetch')

const spotify = new SpotifyWrapper({ token: 'BQD4a3QnQ_sDa_W3mN0SscPmgRoqfn-_GVe6Hh45NxemyNylPTHeID9qFoU7EHE8CncY-Vrki2xQph6IbZYsaGI4bP6lfiDiLzMEtHGCC0GDbI7Ux6Mm2hWbeiFi3eSP_gzAuW2Y4cibdJDZYv8' })

const albuns = spotify.search.albums('metallica')

albuns.then(data =>
  data.albums.items.map(item => console.log(item.name)))
  .catch(err => console.log(err))
