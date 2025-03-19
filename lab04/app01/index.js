import express from "express"

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Prosty serwer oparty na szkielecie programistycznym Express!");
})

app.get('/about', (req, res) => {
    res.send("Kacper Wiacek")
})

app.get('/name/:imie1', (req, res) => {
    res.set('Content-Type', 'text/html').status(200).send("Witam " + req.params.imie1)
})

app.get('/name/:imie1/:imie2', (req, res) => {
    res.set('Content-Type', 'text/html').status(200).send("Witam " + req.params.imie1 + " i " + req.params.imie2)
})

app.listen(PORT, (req, res) => {
    console.log("Serwer działa na porcie: 3000");
})