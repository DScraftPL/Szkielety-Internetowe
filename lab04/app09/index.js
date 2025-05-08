import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const getDate = () => {
    const date = new Date()
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/index.html'))
    console.log(getDate() + ' wysłano /')
})

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/blog.html'))
    console.log(getDate() + ' wysłano blog')
})

app.get('/buisness', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/buisness.html'))
    console.log(getDate() + ' wysłano buisness')
})

app.get('/commerce', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/commerce.html'))
    console.log(getDate() + ' wysłano commerce')
})

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/portfolio.html'))
    console.log(getDate() + ' wysłano portfolio')
})

app.listen(3000, () => console.log(getDate() + ' hello world! '))