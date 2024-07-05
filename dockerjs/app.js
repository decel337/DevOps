const http = require('http');

const url = require('url');

const port = 80;

const listenter = (_req, res) => {
    const reqUrl = url.parse(_req.url).pathname;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if(reqUrl === "/"){
        res.end('Lab work DevOps')
    }
    else if(reqUrl === "/k8s-check"){
        res.end('Path Check!!!')
    }
};

const server = http.createServer(listenter);

server.listen(port, () => {
    console.log('Server start');
});

