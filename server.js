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

app.get('/api/collect-protocol', (req, res) => {
  //req.body.year
  //req.body.year sarà l'anno richiesto
  //aggiungere chiamata al db plz
  const protocols = [
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Prima', id:0},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Seconda', id:1},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Terza', id:2},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quarta', id:3},
  {titolo : 'Lorem Ipsum', descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', classe: 'Quinta', id:4},
  ] //risultato query
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({protocols : protocols}))
})

app.listen(port, () =>
  console.log(`Express server is running on ${port}`)
)