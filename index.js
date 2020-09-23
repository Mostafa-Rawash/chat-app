var app = require("express")();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
var port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
io.on("connection", (socket) => {
    console.log("socket is workes");
    socket.on("chat message", (msg, name) => {
        console.log("hihihi  + " + name + " : " + msg);
        io.emit('chat message', msg , name);

    })
})

http.listen(port, () => {
    console.log("server work at port http://localhost:3000");
})
