import express, { urlencoded } from 'express'
import users from './users.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(urlencoded({extended: true}))

let metoda = (req, res, next) => {
    console.log("Metoda: ", req.method)
    let sciezka = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(sciezka)
    next()
}

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie został odnaleziony` })
    }
})

app.post('/api/users', (req, res) => {
    console.log(req.body)
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: "aktywny"
    }
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'Wprowadź poprawne imię i nazwisko oraz email!' })
    }
    users.push(newUser)
    res.json(users)
})

app.patch('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        const updUser = req.body
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updUser.name ? updUser.name : user.name
                user.email = updUser.email ? updUser.email : user.email
                res.json({ msg: 'Dane użytkownika zaktualizowane', user })
            }
        })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!` })
    }
})

app.delete('/api/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        users.splice(parseInt(req.params.id))
        res.status(200).json({ msg: `usunieto uzytkownika ${req.params.id}` })
    } else {
        res.status(400).json({ msg: `Użytkownik o id ${req.params.id} nie istnieje!` })
    }
})

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))
