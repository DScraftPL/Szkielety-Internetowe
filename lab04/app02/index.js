import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.get("/form/1", (req, res) => {
    res.sendFile(path.join(__dirname, "html/form1.html"))
})

app.get("/form/2", (req, res) => {
    res.sendFile(path.join(__dirname, "html/form2.html"))
})

app.get("/result/1", (req, res) => {
    let username = req.query.username
    let password = req.query.password
    if(username === "" || password === ""){
        res.send("Uzupelnij dane!")
    } else {
        res.send("Użytkownik: " + username + "<br>Hasło: " + password)
    }
})

app.get("/result/2", (req, res) => {
    let username = req.query.username

    let jezyk1 = req.query.jezyk1
    let jezyk2 = req.query.jezyk2
    let jezyk3 = req.query.jezyk3

    if(username === ""){
        res.send("Uzupelnij dane!")
    } else {
        res.send("Użytkownik: " + username + "<ul>"
            + (jezyk1 != null ? ("<li>" + jezyk1 + "</li>") : "")
            + (jezyk2 != null ? ("<li>" + jezyk2 + "</li>") : "")
            + (jezyk3 != null ? ("<li>" + jezyk3 + "</li>") : "")
            + "</ul>"
        )
    }

})

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))