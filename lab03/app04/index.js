const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
        "<h1>Aplikacja w Node</h1><br><p>To jest odpowiedz HTML</p><br>1.<br>2.<br>3.<br>"
    )
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
