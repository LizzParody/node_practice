Create a folder for the node project

mkdir ~/Desktop/some_express_project

Run npm init to get the package.json file set up.

The package.json file should look something like this:
``` javascript
{
  "name": "example",
  "version": "1.0.0",
  "description": "\"example\"",
  "main": "myApp.js", //this is the name of the file
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lyzzeth Parody Alvarez",
  "license": "ISC"
}
```

Install Express (we already have it installed globally on our machines, but we also need to add it as a dependency of the application).

```
npm install express --save
```

And then, the package.json file will look like this

```javascript
{
  "name": "example",
  "version": "1.0.0",
  "description": "\"example\"",
  "main": "myApp.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lyzzeth Parody Alvarez",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.3"
  }
}
```

If I want a quick template I go to the express webpage and click on guide link.

http://expressjs.com/guide/routing.html
