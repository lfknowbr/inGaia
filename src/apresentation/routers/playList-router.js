const HttpResponse = require('../helpers/http-response')

module.exports = class PlayListRouter {
  constructor (plaiListUseCase) {
    this.playListUseCase = plaiListUseCase
  }

  async route (httpRequest) {
    if (!httpRequest) {
      return HttpResponse.serverError()
    }

    const city = httpRequest.query.city
    if (!city) {
      return HttpResponse.badRequest('city')
    }
    await this.playListUseCase.get(city)
      .then(response => {
        this.response = response
      })
    return {
      statusCode: 200,
      body: this.response
    }
  }
}
