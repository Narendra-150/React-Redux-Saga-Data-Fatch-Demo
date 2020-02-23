const dbb = require("./db.json");
const express = require("express");
var cors = require("cors");

//create express app
const app = express();
app.use(cors());
//port at which the server will run
const port = 4000;

//create end point
app.get("/", (request, response) => {
  //send 'Hi, from Node server' to client
  response.send("Hi, from Node server");
});

app.get("/db", (request, response) => {
  //send 'Hi, from Node server' to client
  response.send(dbb);
});

//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
