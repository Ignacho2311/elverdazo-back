const bcryptjs = require("bcryptjs")
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const usuarioModel = require("../models/usuario")

const registerUsuario = async (req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(501).json({
            ok:false,
            errors:errors.mapped()
        })
    }
    const {email, password,username} =req.body; 

    try {
        let usuario = await usuarioModel.findOne({email})

        if(usuario){
            return res.status(501).json({
                ok:false,
                msg:"Correo ya registrado"
            })
        }
        
        const nuevoUsuario = new usuarioModel({email, password,username})
        const salt = bcryptjs.genSaltSync(12) //Cifrado de password

        nuevoUsuario.password = bcryptjs.hashSync(password,salt)

        await nuevoUsuario.save()

        const payload ={
            id: nuevoUsuario.id
        }

        jwt.sign(payload,process.env.SECRETA,{expiresIn:3600},(error,token)=>{
            res.json({
                ok:true,
                id: nuevoUsuario.id,
                username,
                msg:"Usuario Creado",
                token
            })
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al registrar"
        });
    }
}

const loginUsuario = async (req,res)=>{
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(501).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    const {email, password} =req.body; 

    try {
        let usuario = await usuarioModel.findOne({email})

        if(!usuario){
            return res.status(401).json({
                ok:false,
                msg:"Correo o Contraseña Invalida"
            })
        }
        const passwordValido = bcryptjs.compareSync(password,usuario.password)

        if(!passwordValido){
            return res.status(401).json({
                ok:false,
                msg:"Correo o Contraseña Invalida"
            })
        }

        const payload ={
            id: usuario.id
        }

        jwt.sign(payload,process.env.SECRETA,{expiresIn:3600},(error,token)=>{
            res.json({
                ok:true,
                id: usuario.id,
                username:usuario.username,
                msg:"Inicio Sesion",
                token
            })
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al iniciar sesion"
        });
    }
}

module.exports = {
    loginUsuario,
    registerUsuario
}