import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/about', (req, res) => {
    res.render('about', { name: 'Jan' })
})

app.get('/dane', (req, res) => {
    res.render('dane', {
        name: "kacper",
        email: "kacper@wiacek.pl",
        wiek: "21"
    })
})

app.listen(3000, () => console.log('Serwer działa!'))