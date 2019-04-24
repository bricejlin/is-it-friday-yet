const app = require('./app')
const request = require('supertest')

test('It returns correct answer', done => {
  request(app)
    .get('/')
    .end((err, res) => {
      shouldBeTuesday = (new Date()).getDay() === 2;

      expect(res.body.response).toBe(shouldBeTuesday ? 'Yes' : 'No')
      expect(res.statusCode).toBe(200)
      done()
    })
})
