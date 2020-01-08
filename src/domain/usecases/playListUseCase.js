const { MissingParamError } = require('../../utils/errors/index')
const OpenWatherRepository = require('../../infra/repositories/openWatherRepository')

module.exports = class PlayListUseCase {
  async get (city) {
    if (!city) {
      return new MissingParamError('city')
    }
    const openWathe = new OpenWatherRepository()
    await openWathe.load(city).then(resp => {
      this.OpenWathe = resp
    })

    return this.OpenWathe
  }
}
