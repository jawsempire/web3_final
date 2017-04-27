/**
 * Created by FaDu on 4/27/17.
 */
console.log("Server operational...standing by to stand by");

const express = require('express');
const morgan = require('morgan')
const bodyParser= require('body-parser')
const mysql = require('mysql')
const app = express();

var connection = mysql.createConnection({
    host : '0.0.0.0',
    port: '3306',
    user: 'root',
    password: 'helloworld',
    database: 'quotes'
})

connection.connect();

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/api', (req, res) => {
   connection.query("SELECT * from quote_list", (err,rows,fields)=>{
       res.send(rows);
})
})

app.post('/api', (req, res) => {
    connection.query(`INSERT into quote_list (NAME, Quotes) VALUES ("${req.body.name}","${req.body.quote}")`, (err,rows,fields)=>{
    res.sendStatus(200);
})
})

app.delete('/api/:id',(req,res)=> {
    connection.query(`Delete from quote_list where ID=${req.params.id}`,(err,rows,fields)=>{
        res.sendStatus(200);
})
})


var server = app.listen(8080,'localhost',function(){
    console.log("Sever up and running")
})

