const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get('/api/test', (req, res) => {
  const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ data: data }))
})

app.listen(port, () =>
  console.log(`Express server is running on ${port}`)
)