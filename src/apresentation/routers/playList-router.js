const HttpResponse = require('../helpers/http-response')
module.exports = class PlayListRouter {
  constructor (plaiListUseCase) {
    this.playListUseCase = plaiListUseCase
  }

  route (httpRequest) {
    if (!httpRequest || !httpRequest.query) {
      return HttpResponse.serverError()
    }

    const city = httpRequest.query.city
    if (!city) {
      return HttpResponse.badRequest('city')
    }
    return this.playListUseCase.get(city)
  }
}
