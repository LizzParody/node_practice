1. You need to pick which one of the two templates options you are going to use:
* Jade (similiar to css);
* EJS (embedeble javascript - you create regular html and add special files).

2. Install EJS in the folder you are working:

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
3. Create a folder call "views" and add a file call "default.ejs".

4. In the default.ejs file, create an html file.

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

5. Go to app.js and change the root file.

```javascript
app.get('/', function (req,res) {
  res.render('default'); //the response is going to render the default (you don't have to specify the folder because by default the system thinks is in the views folder)
});
```

6. Save the file, go to the terminal, type localhost:3000
