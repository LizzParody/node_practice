1. Create a folder

2. Create a package.json and fill all the questions.
```
npm init
```

3. Add the express modules

```
npm install express --save
```

4. Create a new file app.js

```javascript

var express = require('express'); //require the express library
var app = express(); //variable for an application global var

app.get('/', function (req,res) { //what to do when it get a request, when the app gets a request, point to the home page '/'
  res.send('Hello Express');//send as a response hello express
});

var server = app.listen(3000, function () {
  console.log('listening on port 3000');
});

```

5. Go to the terminal and type "node app.js"

6. Go to the localhost 3000.
