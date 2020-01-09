const PlayListRouter = require('../routers/playList-router')

const makeSut = () => {
  class CityUseCaseSpy {
    get (city) {
      this.city = city
    }
  }

  const playListUseCaseSpy = new CityUseCaseSpy()
  const sut = new PlayListRouter(playListUseCaseSpy)
  return {
    sut,
    playListUseCaseSpy
  }
}

describe('City router', () => {
  test('Retorna erro 400 se o nome da cidade não foi informado ', () => {
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
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        city: 'any_city'
      }
    }
    sut.route(httpRequest)
  })
})
