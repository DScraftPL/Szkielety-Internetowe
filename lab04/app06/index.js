import express from 'express'
import metoda from './middleware/metoda.js'
import isAuthorized from './middleware/autoryzacja.js'
import router from './api/routes.js'

const app = express()

app.use('/api/', router)
const PORT = 3000

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))