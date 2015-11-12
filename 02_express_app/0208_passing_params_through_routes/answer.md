pass along information through our routes to the application. The info is going to be placed into a parameter variable into request object.

Those variables can be access to that request parameters arrays.  

```javascript
app.get('/who/:name?', function (req,res) {
  var name = req.params.name;
  res.send(name + "was here");
});
```

then go to http://localhost:3000/who/liz
