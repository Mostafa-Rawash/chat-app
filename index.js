var express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var http = require('http').createServer(app);
var io = require("socket.io")(http);
var port = 3000;



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



app.post("/users", (req, res) => {
    res.sendFile(__dirname + "/chat.html")
})



io.on("connection", (socket) => {
    console.log("socket is workes");

    socket.on("inputmail", (name, email) => {
        console.log(name + " : " + email);
    })
    socket.on("chat message", (msg) => {
        console.log(msg);
    })
})

http.listen(port, () => {
    console.log("server work at port http://localhost:3000");
})
