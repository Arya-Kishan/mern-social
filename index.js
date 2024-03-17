const express = require("express")
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT || 8080
require("./mongoDB.js")

const userRouter = require("./Routes/UserRoute")


const server = express();

server.use(cors());
server.use(express.json());



server.use("/user", userRouter)


server.use("/arya", (req, res) => {
    res.status(200).json({ "message": "WELCOME ARYA" })
})


server.use("/", (req, res) => {
    res.status(200).json({ "message": "NORMAL ROUTE" })
})

server.listen(PORT, () => {
    console.log(`SERVER LISTENED AT 8080`);
})
