import Student from "../models/Student.js"

async function insert(req, res) {
    let student = new Student()
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    try {
        await student.save()
        res.redirect("/list")
    } catch (err) {
        console.log("Błąd podczas dodawania studenta: " + err)
    }
}
async function update(req, res) {
    try {
        await Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
        res.redirect("list")
    } catch (err) {
        console.log("Błąd podczas aktualizowania danych: " + err)
    }
}

export { insert, update }