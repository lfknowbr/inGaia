const CityRouter = require('../routers/city-router')
const MissingParamError = require('../../utils/errors/missing-param-error')

const makeSut = () => {
  class CityUseCaseSpy {
    get (city) {
      this.city = city
    }
  }

  const cityUseCaseSpy = new CityUseCaseSpy()
  const sut = new CityRouter(cityUseCaseSpy)
  return {
    sut,
    cityUseCaseSpy
  }
}

describe('City router', () => {
  test('Retorna erro 400 se o nome da cidade não foi informado ', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
      }
    }
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('city'))
  })

  test('Retorna erro 500 se não recebermos um httpRequest ', () => {
    const { sut } = makeSut()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Retorna erro 500 se o httpRequest não tem body', () => {
    const { sut } = makeSut()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Validade se o city recebido é a mesma city que esta no httpRequest', () => {
    const { sut, cityUseCaseSpy } = makeSut()
    const httpRequest = {
      body: {
        city: 'any_city'
      }
    }
    sut.route(httpRequest)
    expect(cityUseCaseSpy.city).toBe(httpRequest.body.city)
  })
})
