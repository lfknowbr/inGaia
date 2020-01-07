const request = require('supertest')
const app = require('../config/app')

describe('Content-Type Middlewarep', () => {
  test('Retorna json content type por default', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })
    await request(app).get('/test_content_type')
      .expect('content-type', /json/)
  })
})
