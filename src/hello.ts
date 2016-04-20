import express = require("express");
import bodyParser = require("body-parser");


let app = express();


app.get('/', function (req, res) {
  res.send('Hello World  new!');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(4444, () => {
  console.log('Example app listening on port 4444!');
});