import { searchAlbums } from '../src/index'
global.fetch = require('node-fetch')

const albuns = searchAlbums('teixeirinha')
albuns.then(data => data.albums.items.map(item => console.log(item.name)))
  .catch(err => console.log(err))
