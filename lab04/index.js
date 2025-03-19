import express from "express"

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Prosty serwer oparty na szkielecie programistycznym Express!");
})

app.listen(PORT, (req, res) => {
    console.log("Serwer działa na porcie: 3000");
})