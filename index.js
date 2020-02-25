var express = require('express');
var app = express();
var PORT = 8080;
var path = require('path');

app.use(express.static('./'));


app.get('/', (req, res) => {

  res.send(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Project warp app listening on port ${PORT}!`));