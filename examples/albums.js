import { searchAlbums } from '../src/main'
global.fetch = require('node-fetch')

const albuns = searchAlbums('teixeirinha')
albuns.then(data => data.albums.items.map(item => console.log(item.name)))
