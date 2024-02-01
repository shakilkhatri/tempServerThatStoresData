const http = require('http');
const port = 3000;

let data = 'AAA';

const requestHandler = (request, response) => {
  if (request.method === 'POST') {
    request.on('data', chunk => {
      data = chunk;
    });
    request.on('end', () => {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Data saved successfully!');
    });
  } else if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(data);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error:', err);
  }

  console.log(`Server is listening on ${port}`);
});
