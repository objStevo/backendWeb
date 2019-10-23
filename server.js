//jshint esversion:6
const express = require("express");
const app = express(); //Simply a express function binding to app



app.get("/",function(req,res){
  res.send("<h1>Hello Again!</h1>");
});

app.get("/contact", function(req,res){
  res.send("<h2>This is the contact page</h2>");
});

app.get("/about",function(req,res){
  res.send("<h1>Hernan Chalco</h1></br><h2>I love trulys and beer.</h2>");
});

app.get("/test",function(req,res){
  res.send("Nodemon test");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});



/*
- Installing express provides two option, save and no save
- The local host 3000 is the root or home folder
- Your get listeners need to be above app.listen, I think
- To use the repl, simply type node
- To use nodemon for active server restart, you need to type nodemon <.js file>
- From the directory of the file.




*/
