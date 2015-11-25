Update app.js:

```javascript
app.get('/', function (req,res) { /
  res.render('default', {country: 'Colombia'}); //send a extra object with the render method.
});
```

Update the views/default.ejs file

```html
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

Go to localhost:3000
