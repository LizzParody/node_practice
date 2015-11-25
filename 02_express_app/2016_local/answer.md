Update the app.js like this:

```javascript
app.locals.pagetitle = "My Super Website "
```
Update the default.ejs page like this:

```HTML
<h1><%= pagetitle %><%= country %></h1>
```
save it, go to the terminal and then localhost:3000

To add the ul again to the '/'; type into the default.ejs:

```HTML
<% if (typeof(users) !== 'undefined') { %>
  <ul>
    <% for (var i=0; i<users.length; i++) { %>
      <li><%= users[i] %></li>
  <% } %>
  </ul>
<% } %>
```
Local object are a convenient way to share information across all the different routes. Locals allows us to work with data that is shared in all the templates.
