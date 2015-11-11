##npm

npm (node package manager) is a package to install and manage your programs in your platform or specific projects.

1. first make sure you have node js install:
```
go terminal
npm help // show the list of the commands available through npm
```
Most of the projects begin by creating a special file: Json package (document that keeps track of my projects and any modules that my project needs)

2. to create a Json file:
* create a new folder,
* go to terminar
* locate the folder

```
npm init (ask a series of questions and after I fill it will create the file for me)

{
  "name": "example",
  "version": "1.0.0",
  "description": "\"this is a example to practice node\"",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lyzzeth Parody Alvarez",
  "license": "ISC"  -----> the last element always without a coma.
}
```
