const CityRouter = require('../routers/city-router')
const MissingParamError = require('../helpers/missing-param-error')

describe('City router', () => {
  test('Retorna erro 400 se o nome da cidade não foi informado ', () => {
    const sut = new CityRouter()
    const httpRequest = {
      body: {
      }
    }
    const httpResponse = sut.route(httpRequest)
    console.log(httpResponse)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('city'))
  })

  test('Retorna erro 500 se não recebermos um httpRequest ', () => {
    const sut = new CityRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Retorna erro 500 se o httpRequest não tem body', () => {
    const sut = new CityRouter()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
