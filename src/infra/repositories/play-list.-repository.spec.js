const { MissingParamError } = require('../../utils/errors/index')
const CityUseCase = require('../../domain/usecases/playListUseCase')
describe('LoadPlayList', () => {
  test('Returna exceção se não receber o nome da cidade ', async () => {
    const sut = new CityUseCase()
    const promise = sut.get()
    expect(promise).rejects.toThrow(new MissingParamError('city'))
  })
})
