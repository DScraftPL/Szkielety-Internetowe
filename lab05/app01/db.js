import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://s99733:7CB7uhZsBow2mUJc@cluster0.k21im1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
    .then((result) => {
        console.log("Połączono z bazą")
    }).catch((err) => {
        console.log("Nie można połączyć: " + err)
    })

export default mongoose

//mongodb://localhost:27017/StudentDB

//7CB7uhZsBow2mUJc