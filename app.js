const express = require("express");
const cors = require("cors")
const { createProxyMiddleware } = require("http-proxy-middleware"); // Importa la librería
const conexionDB = require("./db/config");
const authRouter = require("./routes/auth");
const myAccountRouter = require("./routes/myaccount");
const app = express();
require("dotenv").config()

conexionDB()

app.use(express.json())
app.use(cors())

app.use("/proxy", createProxyMiddleware({
    target: "https://api.sportmonks.com/v3",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "" // Elimina el prefijo /proxy de la ruta
    },
    headers: {
        "Authorization": "5CmvZkaC2QfE3LM0OP8c1mX1uCQrN43nbHNuLSiltjWucCjLw1CBwSDsuHd4" // Agrega tu token de API aquí
    }
  }));
  
  


app.use("/", express.static(__dirname + "/public"));

app.use("/auth", authRouter)
app.use("/myaccount", myAccountRouter)



app.listen(process.env.PORT, ()=>{
    console.log(`app corriendo en el puerto ${process.env.PORT}`);
})