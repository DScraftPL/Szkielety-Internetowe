import express from 'express'
import path from 'path'
import Handlebars from 'handlebars'
import exphbs from 'express-handlebars'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import mongoose from './db.js'
import Student from './models/Student.js'
import {insert, update} from './controllers/StudentController.js'
import listRoutes from 'express-list-routes';

const app = express()
const viewsPath = path.join(path.resolve(), "views")

app.use(express.urlencoded({
    extended: true
}))

app.set("views", path.join(viewsPath, "/"))


app.engine(
    "hbs",
    exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: viewsPath,
    })
)

app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.send(`
        <h3 style="text-align:center">Baza danych studentów</h3>
        <h4 style="text-align:center">Kliknij <a href="/list"> tutaj</a>, aby uzyskać dostęp do bazy.</h4> 
    `)
})

app.get("/list", (req, res) => {
    Student.find().then((docs) => {
        res.render("list", {
            list: docs
        })
    }).catch((err) => {
        console.log("Błąd pobierania danych" + err)
    })
})
app.get("/addOrEdit", (req, res) => {
    res.render("addOrEdit", {
        viewTitle: "Dodaj studenta"
    })
})
app.post("/", (req, res) => {
    if (req.body._id == "") {
        insert(req, res)
    } else {
        update(req, res)
    }
})
app.get("/:id", (req, res) => {
    Student.findById(req.params.id).then((doc) => {
        res.render("addOrEdit", {
            viewTitle: "Zaktualizuj dane studenta",
            student: doc
        })
    }).catch((err) => {
        console.log("Błąd podczas akutalizowania danych" + err)
    })
})
app.get("/delete/:id", (req, res) => {
        Student.findByIdAndDelete(req.params.id).then((doc) => {
        res.redirect("/list")
    }).catch((err) => {
        console.log("Błąd podczas usuwania: " + err)
    })
})



listRoutes(app);

app.listen(3010, () => {
    console.log("Serwer nasłuchuje na porcie 3010")
})