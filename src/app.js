const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const isItTuesday = (new Date()).getDay() === 2
  res.send({
    response: isItTuesday ? 'Yaas' : 'Noo',
    timestamp: Date.now(),
    df: 'asdf'
  })
})

module.exports = app;
