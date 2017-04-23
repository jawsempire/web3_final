console.log("server running");


const express = require('express');
const app = express();


app.get('/', (req, res) => {
// console.log(__dirname)
  res.sendFile(__dirname + '/index.html')

  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

//STARTER CODE TO TEST THE SERVER
// app.get('/', function(req, res) {
//   res.send('Wuz up!')
// })

app.listen(3000, function() {
  console.log('listening on 3000')
})
