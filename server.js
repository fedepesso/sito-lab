const express = require('express')
const url = require('url');
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 5000;

const user_credentials = {
  'user': 'admin_lab',
  'pwd': 'admin_lab'
}

const parse_array = function(raw_string) {
  return raw_string.split('-')
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lab_db"
});

app.get('/', (req, res) => {
  //
})

app.get('/admin', (req, res) => {
  //
})

app.get('/api/collect-preview', (req, res) => {
  const year = url.parse(req.url, true).query.year
  const query = `SELECT * FROM datalist WHERE Classe = ${connection.escape(year)};`
  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({protocols : result}))
  })
})

app.get('/api/collect-protocol', (req, res) => {
  const id = url.parse(req.url, true).query.id
  const query = `SELECT datalist.Titolo, datacontent.Scopo, datacontent.Materiali, datacontent.Procedimento, datacontent.Riflessioni FROM datacontent JOIN datalist ON datacontent.ID=datalist.ID WHERE datalist.ID=${connection.escape(id)};`

  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({data : result[0]}))
  })
})

app.get('/admin/validate_user', (req, res) => {
  const user = url.parse(req.url, true).query.user
  const pwd = url.parse(req.url, true).query.pwd
})

app.listen(port, () =>
  console.log(`Express server is running on ${port}`)
)