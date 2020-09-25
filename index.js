const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

const server = require('http').createServer(app);
const io = require('socket.io')(server)
let port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/users", (req, res) => {
    console.log(req.body.name);
    res.sendFile(__dirname + "/chat.html")
})


io.on("connection", (socket) => {
    console.log("socket is worked");


    socket.on("hi", msg => {
        console.log(msg);
        socket.emit("server messaga" , msg)
    })

})


















server.listen(port, () => {
    console.log(
        "server worked in port 3000"
    );
})