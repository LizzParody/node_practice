1. In the "views" folder create a "partials" folder and inside the "partials" folder create a "page" folder.

2. In the page folder create files called head.ejs, footer.ejs, header.ejs and jsdefault.ejs.

In the head.ejs go:

```HTML
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Colombia</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
```
In the jsdefault.ejs go the jquery and the bootstrap (which is in everypage of our app):

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
```
In the header we just put the tags
```html
<header></header>
```

And if footer.ejs you just put the tags again
```HTML
<footer></footer>
```
Leaving the default.ejs page like this:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head><% include partials/page/head.ejs %></head>
  <body class="<%= classname %>">

  <% include partials/page/header.ejs %>
  <div class = "container">
      <h1><%= country %></h1>
      <p>
        Colombia, oficialmente República de Colombia, es un estado unitario situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.
      </p>
      <ul>
      <% for(var i = 0; i<users.length; i++){%>
        <li><%= users[i] %></li>
      <% } %>
      </ul>
    <div><!-- container-->
    <% include partials/page/footer.ejs %>
    <% include partials/page/jsdefaults.ejs %>
  </body>
</html>

```

And the app.js like this:
```javascript
var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function (req,res) {
  res.render('default', {
    country: 'Colombia',
    classname: 'home',
    users: ['Rodo', 'Marga', 'Cris', 'ilana']
  });
});

app.get('/about', function (req,res) {
  res.render('default', {
    country: 'About us',
    classname: 'about'
  });
});

app.get('*', function (req, res) {
  res.send("Bad route");
});

var server = app.listen(3000, function () {
  console.log('listening on port 3000');
});
```

And to go to localhost:3000/about, you need to delete the ul:
```
<ul>
<% for(var i = 0; i<users.length; i++){%>
  <li><%= users[i] %></li>
<% } %>
</ul>
```
