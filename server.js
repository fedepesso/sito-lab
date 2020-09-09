const express = require('express')
const url = require('url')
const mysql = require('mysql')
const crypto = require('crypto')
const parser = require('body-parser')
const cors = require('cors')
const jwt = require("jsonwebtoken")

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(parser.json())

const user_credentials = {
  'user': 'admin_lab',
  'pwd': 'admin_lab',
  'private_key': 'bSJL0t11MYoPS1Pcw4HDNggzPB3oOxiWDdQTrJwwohaTS6ALJE8cMtId7hYHFIduLufROZSrYgxDl016jQZKpo0KqCcXFbomMqh0'
}

const parse_array = function(raw_string) {
  return raw_string.split('-')
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lab_db",
  multipleStatements: true
})

app.get('/', (req, res) => {
  // restituire html compilato sito principale
})

app.get('/admin', (req, res) => {
  // restituire html compilato pannello admin
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
  const query = `SELECT datalist.Titolo, datalist.Preview, datalist.Classe, datacontent.Scopo, datacontent.Materiali, datacontent.Procedimento, datacontent.Riflessioni FROM datacontent JOIN datalist ON datacontent.ID=datalist.ID WHERE datalist.ID=${connection.escape(id)};`

  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({data : result[0]}))
  })
})

app.get('/admin/validate_user', (req, res) => {
  const user = url.parse(req.url, true).query.user
  const pwd = url.parse(req.url, true).query.pwd
  if (user === user_credentials.user && pwd === user_credentials.pwd) {
    const token = jwt.sign(user_credentials, user_credentials.private_key, { expiresIn: '2h' })
    res.send({status : 200, token})
  }
  else {
    res.send({status : 600})
  }
})

const verify_token = function(req, res, next) {
  const token = req.get('access-token')
  try {
    const decoded = jwt.verify(token, user_credentials.private_key, {maxAge: '2h'})
    if (decoded.user === user_credentials.user && decoded.pwd === user_credentials.pwd) {
      next()
    } else {
      res.send({status: 600})
    }
  } catch (err) {
    res.send({status: 600})
  }
}

app.post('/api/add-protocol', verify_token,  (req, res) => {
  const proto = req.body
  let d_obj = new Date()
  const id = crypto.createHash('md5').update(JSON.stringify(req.body)+String(d_obj.getFullYear()+d_obj.getMonth()+d_obj.getDate()+d_obj.getHours()+d_obj.getMinutes()+d_obj.getSeconds())).digest("hex")
  const query = `INSERT INTO datalist VALUES ("${id}", '${proto.classe}', '${proto.titolo}', '${proto.anteprima}');
                INSERT INTO datacontent VALUES ("${id}", '${proto.scopo}', '${proto.materiali}', '${proto.procedimento}', '${proto.conclusioni}', '', '');`
  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.send({status : 200})
  })
})

app.post('/api/modify-protocol', verify_token,  (req, res) => {
  const proto = req.body
  const id = url.parse(req.url, true).query.id
  const query = `UPDATE datalist SET ID='${id}', Classe='${proto.classe}', Titolo='${proto.titolo}', Preview='${proto.anteprima}' WHERE ID ='${id}';
                UPDATE datacontent SET ID='${id}', Scopo='${proto.scopo}',   Materiali='${proto.materiali}', Procedimento='${proto.procedimento}', Riflessioni='${proto.conclusioni}', ElencoImmagini='', DidascalieImmagini='' WHERE ID = '${id}';`
  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.send({status : 200})
  })
})

app.post('/api/remove_protocol', verify_token,  (req, res) => {
  const id = url.parse(req.url, true).query.id
  const query = `DELETE FROM datacontent WHERE ID = '${id}'; DELETE FROM datalist WHERE ID = '${id}'`
  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.send({status : 200})
  })
})

app.listen(port, () =>
  console.log(`Express server is running on ${port}`)
)