import express from 'express'
import path from 'path'
import reactEngine from 'express-react-views'

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', reactEngine.createEngine())

app.get('/about', (req, res) => {
    res.render('about', {
        nazwisko: 'Kowalski',
        wiek: '99',
        email: 'a@a.pl'
    })
})

app.listen(3000, () => console.log('Serwer dziala'))
