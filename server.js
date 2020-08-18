const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const pino = require('express-pino-logger')()

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

const parse_array = function(raw_string) {
  return raw_string.split('-')
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lab_db"
});

app.get('/api/test', (req, res) => {
  const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ data: data }))
})

app.get('/api/collect-preview', (req, res) => {
  const year = 'Prima'

  connection.query("SELECT * FROM datalist WHERE Classe = 'Prima';", function (err, result, fields) {
    if (err) throw err
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({protocols : result}))
  })
  
})

app.get('/api/collect-protocol', (req, res) => {
  const id = 'ab1'
  const query = "SELECT datalist.Titolo, datacontent.Scopo, datacontent.Materiali, datacontent.Procedimento, datacontent.Riflessioni FROM datacontent JOIN datalist ON (datacontent.ID=datalist.ID AND datalist.ID='ab1');"

  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({data : result[0]}))
  })

})

app.listen(port, () =>
  console.log(`Express server is running on ${port}`)
)