const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const isItFriday = (new Date()).getDay() === 5
  res.send({
    response: isItFriday ? 'Yas' : 'No'
  })
})

module.exports = app;
