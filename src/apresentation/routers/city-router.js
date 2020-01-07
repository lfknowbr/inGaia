const HttpResponse = require('../helpers/http-response')
module.exports = class CityRouter {
  constructor (cityUseCase) {
    this.cityUseCase = cityUseCase
  }

  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }

    const { city } = httpRequest.body
    if (!city) {
      return HttpResponse.badRequest('city')
    }
    this.cityUseCase.get(city)
  }
}
