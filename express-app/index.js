const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Express World!</h1>'i
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
