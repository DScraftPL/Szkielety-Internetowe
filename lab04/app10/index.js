import express from "express"

const app = express();
const PORT = 3001

app.get('/', (req, res) => {
    const toRad = req.query.toRad
    const value = req.query.value
    var display = 0;
    var text = ""
    console.log(toRad)
    if(toRad == "true"){
        text = "rad"
        display = value/180 * 3.14;
    } else {
        text = "deg"
        display = value/3.14 * 180;
    }
    res.send(value + ' ' + text +  ' -> ' + display.toFixed(2))
})

app.listen(PORT, () => console.log('hello wrold'))