class CityRouter {
  route (httpRequest) {
    if (!httpRequest.body.city) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('City router', () => {
  test('Retorna erro 400 se o nome da cidade não foi informado ', () => {
    const sut = new CityRouter()
    const httpRequest = {
      body: {}
    }
    const httpResponse = sut.route(httpRequest)
    console.log(httpResponse)
    expect(httpResponse.statusCode).toBe(400)
  })
})
