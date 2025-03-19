const http = require('http')
const url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let q = url.parse(req.url, true).query
    let a = parseInt(q.a)
    let b = parseInt(q.b)
    let c = parseInt(q.c)
    let p = 0.5 * (a + b + c)
    let wynik = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    res.end("Pole trojkata: " + wynik.toString())
}).listen(3000)

//localhost:3000/?a=10&b=20&c=30

