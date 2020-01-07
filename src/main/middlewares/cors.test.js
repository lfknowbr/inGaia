const request = require('supertest')
const app = require('../config/app')

describe('CORS Middlewarep', () => {
  test('Habilitar COR da API ', async () => {
    app.get('/test_cor', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_cor')
    expect(res.header['access-control-allow-origin']).toBe('*')
    expect(res.header['access-control-allow-methods']).toBe('*')
    expect(res.header['access-control-allow-headers']).toBe('*')
  })
})
