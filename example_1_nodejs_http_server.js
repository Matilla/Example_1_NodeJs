const http = require('http');

//const hostname = 'matilla-examples_node_js-3151490';
//const port = 3000;

const hostname = process.env.IP;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
