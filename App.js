const http = require('http');
const url = require ('url');

const rd = require('./modules/retrivedate')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    const query = url.parse(req.url, true).query;
    // res.write("la fecha y hora es: " + rd.retrivedate)
    const text = query.year + " " + query.month
    res.end();
}).listen(8080);