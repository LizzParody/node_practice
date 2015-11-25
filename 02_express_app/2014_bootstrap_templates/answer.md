Templates are sometimes called views, and the data that passes through them are called model.

Merger view into model allows you to create database pages super easily.

You can create multiple templates for different uses. A lot of time you want the same information in every page, like header and footer info. --> For that, we can create a sub-template folder called partials.

1. Go to boostrap templates, click on getting started.

2. Delete the body and html part of the default.ejs so it will look like this:
```html
    <h1><%= country %></h1>
    <p>
      Colombia, oficialmente República de Colombia, es un estado unitario situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.
    </p>
    <ul>
    <% for(var i = 0; i<users.length; i++){%>
      <li><%= users[i] %></li>
    <% } %>
    </ul>
    ```

2. Copy and paste the "Basic Template" code and put it in the beginning of the page:
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Colombia</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">

  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>

    <h1><%= country %></h1>
    <p>
      Colombia, oficialmente República de Colombia, es un estado unitario situada en la región noroccidental de América del Sur. Está constituida en un estado social y democrático de derecho cuya forma de gobierno es presidencialista.
    </p>
    <ul>
    <% for(var i = 0; i<users.length; i++){%>
      <li><%= users[i] %></li>
    <% } %>
    </ul>
```

3. Make sure you download the css and js files from CDNs, that way we don't have to download and install bootstrap framework into the project.

4. Go to the Bootstrap page (getting started) and copy "Bootstrap CDN". Get the link from the css:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
```

And also the JS file:
```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
```

And move the html file up in the body:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Colombia</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

  </head>
  <body>
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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
  </body>
</html>
```
