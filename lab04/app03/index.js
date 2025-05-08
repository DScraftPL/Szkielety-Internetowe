import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { query, validationResult } from 'express-validator'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

const sanitizeValue = value => {
    if(value.includes(' ')) {
        return value[0] + ' ' + value[value.indexOf(' ') + 1]
    }
    return value[0]
}

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "html/form.html"))
})

app.get("/result",[
    query('username').isLength({max: 25}).withMessage("za dlugi!").trim().bail().customSanitizer(value => {
        return sanitizeValue(value)
    }),
    query('password').notEmpty().withMessage("podaj haslo!").trim().bail(),
    query('age').isFloat({ min: 0, max: 110 }).withMessage("zly wiek!")
], (req, res) => {
    console.log(req.query)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }
    let username = req.query.username
    let password = req.query.password
    let age = req.query.age

    res.send("Użytkownik: " + username + "<br>Hasło: " + password + "<br>Wiek: " + age)
})

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))