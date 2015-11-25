#Create an express app

1. Create a folder.
2. Create a json package, and fill the questions
```
npm init
```
3. Install the node_modules folder
```
npm install gulp --save.
```
4. Install express locally
```
npm install express --save.
```
It will look like this
```javascript
"dependencies": {
  "express": "^4.13.3",
  "gulp": "^3.9.0"
}
```
5. Create a new file app.js
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("hello papa");
});

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
```

6. Go to the terminal and type
```
npm app.js
```
7. Go to localhost:3000.

8. Add a route:
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("hello papa");
});

app.get('/planet', function(req, res){ //when you go to the port localhost:3000/planet -- Earth will show up.
  res.send("Earth");
});

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
```
Go to the terminal, npm app.js --> and then go to localhost:3000/planet

9. Parameters: The info is going to be placed into a parameter variable into request object.

```javascript
app.get('/info/:firstName?', function (req, res) {
  var firstName = req.params.firstName;
  res.send(firstName + " is my name");
});
```

10. Multiple parameters:
```javascript
app.get('/info/:firstName?/:lastName?', function (req, res) {
  var firstName = req.params.firstName;
  var lastName = req.params.lastName;
  res.send('<p>My full name is ' + firstName + " " + lastName + "</p>");
});
```

11. Bad routes:

```javascript
app.get('*', function (req, res) {
  res.send("<h1>Wrong route, please try again ;) </h1>");
});
```

##So Far
```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello princess');
});

app.get('/planet', function (req, res) {
  res.send('Earth');
});

app.get('/info/:firstName?', function (req, res) {
  var firstName = req.params.firstName;
  res.send(firstName + " is my name");
});

app.get('/info/:firstName?/:lastName?', function (req, res) {
  var firstName = req.params.firstName;
  var lastName = req.params.lastName;
  res.send('<p>My full name is ' + firstName + " " + lastName + "</p>");
});

app.get('*', function (req, res) {
  res.send("<h1>Wrong route, please try again ;) </h1>");
});

var server = app.listen(3000, function () {
  console.log("go to port 3000");
});
```

# EJS templates
1. Install EJS
```
npm install ejs --save
```
The json package will look like this:
```
"dependencies": {
  "ejs": "^2.3.4",
  "express": "^4.13.3"
}
```

2. Call the engine... allows me to set variables for express, since we are calling the engine we need to use templates - that are in a views directory.
```
app.set('view engine', 'ejs');
```
3. Create a folder called "views" and inside that folder, create a file called colombia.ejs and write a html file.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My App</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>
      Colombia, oficialmente República de Colombia, es un estado unitario situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.
    </p>
  </body>
</html>
```

3. Go to app.js and change the root file:
```javascript
app.get('/', function () {
  res.render('colombia'); //the response is going to render the default (you don't have to specify the folder because by default the system thinks is in the views folder)
});
```

4. Save the file, go to the terminal, type localhost:3000.

###To change any variable to the template that is used to the root page.

1. Change the root file:
```javascript
app.get('/', function () {
  res.render('colombia', {country: 'Colombia'});
});
```

2. Change the colombia.ejs file:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My App</title>
  </head>
  <body>
    <h1><%= country %></h1>
    <p>
      Colombia, oficialmente República de Colombia, es un estado unitario situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.
    </p>
  </body>
</html>
```

3. So far:

```javascript
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res) {
  res.render('colombia', {country: 'Colombia'}); //the response is going to render the default (you don't have to specify the folder because by default the system thinks is in the views folder)
});

app.get('/planet', function (req, res) {
  res.send('Earth');
});

app.get('/info/:firstName?', function (req, res) {
  var firstName = req.params.firstName;
  res.send(firstName + " is my name");
});

app.get('/info/:firstName?/:lastName?', function (req, res) {
  var firstName = req.params.firstName;
  var lastName = req.params.lastName;
  res.send('<p>My full name is ' + firstName + " " + lastName + "</p>");
});

app.get('*', function (req, res) {
  res.send("<h1>Wrong route, please try again ;) </h1>");
});

var server = app.listen(3000, function () {
  console.log("go to port 3000");
});
```
##Ading javascript
1. In your ejs file, after the <p> you put
```html
<ul>
<% for(var i = 0; i<users.length; i++){%>
  <li><%= users[i] %></li>
<% } %>
</ul>
```
2. back to the app.js in the root file you create the users variable:

```javascript
app.get('/', function (req,res) {
  res.render('default', {
    country: 'Colombia',
    users: ['Rodo', 'Marga', 'Cris', 'ilana']
  });
});
```
