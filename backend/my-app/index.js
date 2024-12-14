const { add, sub } = require('./math');
const resultAdd = add(5, 3);
const resultSub = sub(10, 4);
console.log("Hello World !");
console.log(`Addition result: ${resultAdd}`);
console.log(`Subtraction result: ${resultSub}`);



var http = require('http');

const server = http.createServer(function (req, res) {
    res.end('Hello World!');
});

server.listen(8080, () => {
    console.log("server is listning on 8000")
});

