const app = require('./app')
const request = require('supertest')

test('It returns correct answer', done => {
  request(app)
    .get('/')
    .end((err, res) => {
      shouldBeFriday = (new Date()).getDay() === 5;

      expect(res.text).toBe(shouldBeFriday ? 'Yes' : 'No')
      expect(res.statusCode).toBe(200)
      done()
    })
})
