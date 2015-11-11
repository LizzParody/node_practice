var http = require('http');
var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("hello world");
  response.end();
});

myServer.listen(3000);

//After you create the server, go to the terminal and type "node fileName".
console.log("Go to http://localhost:3000 on your browser");
//To exit the node mode, press ctrl c
