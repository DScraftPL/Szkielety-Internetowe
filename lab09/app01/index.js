const express = require("express")
const https = require("https")
const fs = require("fs")
const helmet = require("helmet")

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
}
const app = express()
app.use(helmet()) // oprogramowanie pośredniczące helmet
app.use((req, res) => {
  res.writeHead(200)
  res.end("hello world\n")
})
app.listen(8000)
https.createServer(options, app).listen(8080)