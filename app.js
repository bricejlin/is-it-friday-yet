const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const isItFriday = (new Date()).getDay() === 5
  res.send(isItFriday ? 'Yes' : 'No')
})

module.exports = app;
