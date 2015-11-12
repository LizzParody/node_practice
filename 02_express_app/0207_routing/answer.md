Routes are a way of serving different content of your client based on the state of you application. Express let you manage the routes super well.

```javascript

var express = require('express');
var app = express();

app.get('/', function (req,res) {
  res.send('<h1>Hello</h1> Express');
});

app.get('/me', function (req,res) {  // you copy and paste the app.get above and change the root /
  res.send('Lyzzeth Parody Alvarez');
});

var server = app.listen(3000, function () {
  console.log('listening on port 3000');
});
```

Go to the terminal ctrl c, node app.js, and go to http://localhost:3000/me
