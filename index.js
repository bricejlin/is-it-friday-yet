const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const isItFriday = (new Date()).getDay() === 5
  res.send(isItFriday ? 'Yes' : 'No')
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
