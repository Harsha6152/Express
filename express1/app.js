const express = require("express")
const app = express()


app.get('/', (req, res) => {
    res.send("WELCOME TO EXPRESS TUTORIAL")
})
app.listen(6152, () => {
    console.log("Server Started at port 6152");

})