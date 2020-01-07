const request = require('supertest')
const app = require('../config/app')

describe('JSON Parser Middlewarep', () => {
  test('Realiza o parse do Body JSON ', async () => {
    app.post('/test_body_parse', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parse')
      .send({ name: 'city' })
      .expect({ name: 'city' })
  })
})
