const { MissingParamError } = require('../../utils/errors/index')
const PlayListUseCase = require('./playListUseCase')

describe('PlayList UseCase', () => {
  test('Returna exceção se não receber o nome da cidade ', async () => {
    const sut = new PlayListUseCase()
    const promise = sut.get()
    expect(promise).rejects.toThrow(new MissingParamError('city'))
  })
})
