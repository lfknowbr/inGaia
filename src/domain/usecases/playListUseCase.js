const { MissingParamError } = require('../../utils/errors/index')
module.exports = class PlayListUseCase {
  async get (city) {
    if (!city) {
      return new MissingParamError('city')
    }
  }
}
