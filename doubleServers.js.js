var http = require("http");
var PORT = 7000;
function handleRequest(request,response){
//
var goodThings = ["You have nice hair", "You have a bright future","You have a good sense of fashion","You're capable of great things"];
var good = goodThings[Math.floor(Math.random()*goodThings.length)];

  response.end(good + request.url);
}
var server = http.createServer(handleRequest);
server.listen(PORT,function(){
  console.log("Server not Listening on: http://localhost:" + PORT);
});

//------------------------------------------------------------------------------------------------------------------------------------
var http = require("http");
var PORT = 7500;
function handleRequestTwo(request,response){

  var badThings = ["You have terrible hair", "You have a failing future","You have a bad sense of fashion and terrible body odor","You're not capable of anything","You so dumb you tried putting skittles in alphebetical order","You so fat you got stuck while jumping for joy","You so fat that when you went to Sea World the whales started singing we are a family!"];
  var bad = badThings[Math.floor(Math.random()*badThings.length)];

    response.end(bad + request.url);
}
var servertwo = http.createServer(handleRequestTwo);
servertwo.listen(PORT,function(){
  console.log("Server not Listening on: http://localhost:" + PORT);
});
