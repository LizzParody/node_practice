##Express

Express is a framework: a way of structuring your code that gives you additional capabilities.

It gives to Node.js a more realistic structure

It uses something called a Templating Languages (easy to flow your data into a website structure). Has two templating engines
* Jade
* EJS (more like html)

It also provides a routing mechanism: make an URL work slightly different than html files.
Traditional URL refers to a file that is generated from a database. Routing is a technique used in a single page websites that allows the URL to control the stage of the application.

Another benefit: Ability to access to a MVC pattern --> modern view controller (instead of writing different pages you use a model)
 * Model - this is the data the application is going to use. You flow the data to the view.
 * View - the template (created by EJS)
 * Controller - the Javascript.  

##Install express globally
 ```
 npm install -g express-generator
 express --version
 ```   

 You often include a json pack with some information about the project.
