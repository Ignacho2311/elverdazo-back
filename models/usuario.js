const {Schema,model} = require("mongoose");


const usuario = new Schema({
    username: {
        type:String,
        required:true
    },
    email:{
        unique:true,
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // equipo:{
    //     type:Number,
    //     required:true,
    //     trim: true
    // },
    // corners:{
    //     type:Boolean,
    //     required:true,
    //     trim: true
    // },
    // over1_5goals:{
    //     type:Boolean,
    //     required:true,
    //     trim: true
    // },
    // yellow_cards:{
    //     type:Boolean,
    //     required:true,
    //     trim: true
    // },
    // createdAt:{
    //     type:Date,
    //     default:Date.now()
    // }
})

module.exports = model("Usuario",usuario)