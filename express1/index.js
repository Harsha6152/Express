const app = require('express')();
const port = 6001;


app.listen(port, () => {
    console.log("server started on 6001");

})

app.get('/getRequest', (req, res) => {
    res.send("hello welcome to get request")
})
app.post('/postRequest', (req, res) => {
    res.send("hello welcome to post request")
})