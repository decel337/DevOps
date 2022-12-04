const http = require('http');

const port = 80;

const listenter = (_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Lab work DevOps');
};

const server = http.createServer(listenter);
server.listen(port, () => {
    console.log('Server start');
});
