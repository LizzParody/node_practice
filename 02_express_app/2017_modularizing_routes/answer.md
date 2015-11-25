Once the application is bigger is important to separate some of the routing code in their own file.

1. In the node folder, create a new folder call routes.

2. In the app.js call the routes folder:

```
var routes = require('./routes');
```
3. Create a file called "index.js" in the route folder.

4. Copy the two routes into that folder, so your index.js file will look like this:

```javascript
exports.index = function (req,res) {
    res.render('default',{
    country: 'Colombia',
    classname: 'home',
    users: ['Rodo', 'Marga', 'Cris', 'ilana']
  });
}

exports.about = function (req,res) {
  res.render('default', {
    country: 'About us',
    classname: 'about'
  });
}
```
5. And then in the app.js file, you call the variables you created:
```javascript
app.get('/', routes.index);
app.get('/about', routes.about);
```

The app.js file should look like this:
```javascript
var express = require('express'); /
var app = express(); 
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = "My Super Website "

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function (req, res) {
  res.send("Bad route");
});

var server = app.listen(3000, function () {
  console.log('listening on port 3000');
});
```
