After you install the generator
```
express -e someapp
```
You run the two commands that are located in the terminal:
```javascript
cd someapp && npm install //this should install the node_modules folder

DEBUG=someapp:* npm start //preview my project
And in the terminal should say:
Listening on port 3000
```

After you have the folder with all the generators, you have to put a file in the main directory call "data.json" then you put your css in the public/stylesheets folder, and your script.js in public/javascripts (the scripts is for making the images go large).

Then you have to put your images into the public folder.

After that, you create in the views folder, the "partials" folder, and inside it, "footer.ejs, head.ejs and header.ejs and jsdefault" file.

Then go to the views/index.ejs file, and cut the title and link

```
<title><%= title %></title>
<link rel='stylesheet' href='/stylesheets/style.css' />
```

And paste it in template/head.ejs file. Then you create the meta:vp (viewport) section in the head.ejs
```javascript
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />//to work properly in mobile devices
```

Then, in the index page, you call the head.ejs
```
<head><% include partials/template/head.ejs %></head>
```
