const HttpResponse = require('../helpers/http-response')
module.exports = class CityRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }

    const { city } = httpRequest.body
    if (!city) {
      return HttpResponse.badRequest('city')
    }
  }
}
