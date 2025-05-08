import { query, validationResult } from 'express-validator'
import { nextTick } from 'process'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import isAuthorized from '../middleware/autoryzacja.js'
import metoda from '../middleware/metoda.js'

const router = express.Router();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "../html/form.html"))
})

router.get("/result",[
    query('username').isLength({max: 25}).withMessage("za dlugi!").trim().bail().customSanitizer(value => {
        return metoda(value)
    }),
    query('password').notEmpty().withMessage("podaj haslo!").trim().bail(),
    query('age').isFloat({ min: 0, max: 110 }).withMessage("zly wiek!")
], isAuthorized, (req, res) => {
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

export default router;