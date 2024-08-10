const express = require('express');
const port = process.env.port || 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

app.get("/form", (req, res) => {
    res.sendFile(__dirnmae + '/puclic/index.html')
})

app.post('/formPost', (req, res) => {
    console.log(req.body)
})
app.listen(port, () => {
    console.log("server listening on port 3000");

});
