const express = require('express')
const url = require('url')
const mysql = require('mysql')
const crypto = require('crypto')
const parser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000;

app.use(parser.json())

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
  database: "lab_db",
  multipleStatements: true
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
})

app.post('/api/add-protocol', (req, res) => {
  const proto = req.body
  console.log(proto.scopo)
  let d_obj = new Date()
  const id = crypto.createHash('md5').update(JSON.stringify(req.body)+String(d_obj.getFullYear()+d_obj.getMonth()+d_obj.getDate()+d_obj.getHours()+d_obj.getMinutes()+d_obj.getSeconds())).digest("hex")
  const query = `INSERT INTO datalist VALUES ("${id}", '${proto.classe}', '${proto.titolo}', '${proto.anteprima}');
                INSERT INTO datacontent VALUES ("${id}", '${proto.scopo}', '${proto.materiali}', '${proto.procedimento}', '${proto.conclusioni}', '', '');`

  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.send({status : 200})
  })
})

app.post('/api/modify-protocol', (req, res) => {
  const proto = req.body
  const id = url.parse(req.url, true).query.id
  const query = `UPDATE datalist SET ID='${id}', Classe='${proto.classe}', Titolo='${proto.titolo}', Preview='${proto.anteprima}' WHERE ID ='${id}';
                UPDATE datacontent SET ID='${id}', Scopo='${proto.scopo}',   Materiali='${proto.materiali}', Procedimento='${proto.procedimento}', Riflessioni='${proto.conclusioni}', ElencoImmagini='', DidascalieImmagini='' WHERE ID = '${id}';`
  
  connection.query(query, function (err, result, fields) {
    if (err) throw err
    res.send({status : 200})
  })
})

app.post('/api/remove_protocol', (req, res) => {
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