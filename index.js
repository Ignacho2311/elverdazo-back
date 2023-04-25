const express = require("express");
const cors = require("cors")
const conexionDB = require("./db/config");
const authRouter = require("./routes/auth");
const myAccountRouter = require("./routes/myaccount");
const app = express();
require("dotenv").config()

conexionDB()

app.use(express.json())
app.use(cors())


app.use("/", express.static(__dirname + "/public"));

app.use("/auth", authRouter)
app.use("/myaccount", myAccountRouter)



app.listen(process.env.PORT, ()=>{
    console.log(`app corriendo en el puerto ${process.env.PORT}`);
})