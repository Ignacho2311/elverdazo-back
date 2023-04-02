const {Router} = require("express");
const { check } = require("express-validator");
const { account } = require("../controllers/Account");
const { registerUsuario, loginUsuario } = require("../controllers/authController");

const authRouter = Router()

authRouter.post("/register",[check("email","El formato es invalido").isEmail(),
check("password","La contraseña tiene que ser de 6 caracteres minimo").isLength({min:6}),
check("username","El nombre de usuario es requerido").not().isEmpty()], registerUsuario)
authRouter.post("/login", [check("email","El formato es invalido").isEmail(),
check("password","La contraseña tiene que ser de 6 caracteres minimo").isLength({min:6})] , loginUsuario)
authRouter.post("/home",account)
module.exports = authRouter