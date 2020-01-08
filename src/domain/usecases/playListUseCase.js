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

    if (this.openWathe) {
      const spotify = new Spotify()
      await spotify.getPlaylist().then(resp => {
        this.spotify = resp
      })
    }
    return this.OpenWathe
  }
}
