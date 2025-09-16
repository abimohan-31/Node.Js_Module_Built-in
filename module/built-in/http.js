//This module, containing both a client and server, can be imported via require('node:http') (CommonJS) or import * as http from 'node:http' (ES module).

//The Node.js HTTP API is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.

const http = require("node:http");

// Create a local server to receive data from

// Text Format
// //JSON format
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(`{ "name" : "Abi" }` )
//     });


//JSON format
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});


server.listen(5000, () => {
    console.log("Server listening http://localhost:5000");
    
});

