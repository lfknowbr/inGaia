const { MissingParamError } = require('../../utils/errors/index')

const OpenWathery = require('../../infra/openWatherInfra')
const Spotify = require('../../infra/spotfyInfra')

module.exports = class PlayListUseCase {
  async get (city) {
    if (!city) {
      return new MissingParamError('city')
    }
    const openWathe = new OpenWathery()
    await openWathe.load(city).then(resp => {
      this.openWathe = resp
    })

    const temp = parseInt(this.openWathe.main.temp)
    let styleMusic = ''
    if (temp > 25) {
      styleMusic = 'pop'
    } else if (temp > 10 && temp < 25) {
      styleMusic = 'rock'
    } else {
      styleMusic = 'Classical'
    }

    const spotify = new Spotify()
    await spotify.getPlaylist(styleMusic)
      .then(resp => {
        this.spotify = resp.map(r => r.name)
      })

    return this.spotify
  }
}
