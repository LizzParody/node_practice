```javascript
app.get('/who/:name?/:title?', function (req, res) {
  var name = req.params.name; // is going to receive the name from the request parameters array, and we can map the info in the array by calling the name part of the url.
  var title = req.params.title;
  res.send("<p>name:" + name + "<br>title:" + title + "</p>");
});
```

Go to http://localhost:3000/who/liz/theboss
