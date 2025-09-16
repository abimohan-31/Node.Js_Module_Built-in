//This module, containing both a client and server, can be imported via require('node:http') (CommonJS) or import * as http from 'node:http' (ES module).

//The Node.js HTTP API is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.

// Import the built-in HTTP module from Node.js
const http = require("node:http");

// Create a local server to receive data from
// req → the incoming request from the client (browser, Postman, etc.)
// res → the response we send back to the client

// // Text Format
// const server = http.createServer((req, res) => {
// // Here "Content-Type: text/plain" means we are sending back text data
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(`{ "name" : "Abi" }` )
//     });

//JSON format
const server = http.createServer((req, res) => {
  // Set the status code (200 = OK) and response headers
  // Here "Content-Type: application/json" means we are sending back JSON data
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    // Send the response body (in JSON format)
    // JSON.stringify() converts a JavaScript object into a JSON string
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

// Make the server listen on port 5000
// When the server starts, the callback will run and print a message in the terminal

server.listen(5000, () => {
  console.log("Server listening http://localhost:5000");
});
