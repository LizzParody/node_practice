1. In your ejs file, after the <p> you put
```html
<ul>
<% for(var i = 0; i<users.length; i++){%>
  <li><%= users[i] %></li>
<% } %>
</ul>
```
back to the app.js in the root file:

```javascript
app.get('/', function (req,res) {
  res.render('default', {
    country: 'Colombia',
    users: ['Rodo', 'Marga', 'Cris', 'ilana']
  });
});
```
 
