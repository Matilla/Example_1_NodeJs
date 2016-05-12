const http = require('http');

//const hostname = 'matilla-examples_node_js-3151490';
//const port = 3000;

const hostname = process.env.IP; // esto "process.env.IP" parece propio de cloud9, no se puede hacer el push a bluemix asi porque no lo entendera
const port = process.env.PORT;  // esto "process.env.PORT" parece propio de cloud9, no se puede hacer el push a bluemix asi porque no lo entendera

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
