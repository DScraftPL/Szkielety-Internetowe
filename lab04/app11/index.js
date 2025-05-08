import express from "express"

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Prosty serwer oparty na szkielecie programistycznym Express!");
})

app.get('/:color', (req, res) => {
    let color = req.params.color
    console.log(color)
    res.send(`<style>body {background-color: ${color}}</style><div>Prosty serwer oparty na szkielecie programistycznym Express!</div>`)
})

app.listen(PORT, () => console.log("Hello World"))