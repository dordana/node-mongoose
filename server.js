const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8980;

const server = http.createServer(app);

console.log("Start with port: " + port);


server.listen(port);