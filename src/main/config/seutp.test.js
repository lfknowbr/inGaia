const request = require('supertest')
const app = require('./app')

describe('App Setup', () => {
  test('Desabilitar x-powered-by do header ', async () => {
    app.get('/test_x_powered_by', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_x_powered_by')
    expect(res.header['x-powered-by']).toBeUndefined()
  })
})
