console.log("Server operational...standing by to stand by");

const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser= require('body-parser')
const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('index.ejs', {quotes: result})
    })
  })

  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  })

  app.put('/quotes', (req, res) => {
  // Handle put request
    db.collection('quotes')
  .findOneAndUpdate({name: 'Bob Hope'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

  app.delete('/quotes', (req, res) => {
    // Handle delete event here
      db.collection('quotes').findOneAndDelete({name: req.body.name},
        (err, result) => {
      if (err) return res.send(500, err)
      res.send('Bob Hope quote got deleted')
    })
  })


var db

//remember to add the username and password here:
MongoClient.connect('mongodb://web3:forever@ds115671.mlab.com:15671/wolfecastle', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})




////////NOTES//////
// get notes:
/*
//console.log(__dirname)
//var cursor = db.collection('quotes').find()
*/
//

  ////res.sendFile(__dirname + '/index.html')

  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.

//STARTER CODE TO TEST THE SERVER
// app.get('/', function(req, res) {
//   res.send('Wuz up!')
// })
