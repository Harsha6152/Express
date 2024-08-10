const { log } = require('console');
const express = require('express');
const app = express()


const reqFilter = (reqobject, resobject, next) => {
    console.log('reqFilter');
    next()
}

app.use(reqFilter)


app.get("/", (req, res) => {
    res.send("WELCOME TO HARSHA TUTORILA")
})


app.get("/home", (req, res) => {
    res.send("WELCOME TO HARSHA TUTORILs home page")
})


app.listen(3232, () => {
    console.log("server started on 3232")
})