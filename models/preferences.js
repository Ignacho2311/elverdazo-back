const {Schema, model } = require("mongoose")

const favorito = new Schema ({
    equipos:[{
        type:Number,
        required:true,
        trim: true
    }],
    corners:{
        type:Boolean,
        required:true,
        trim: true
    },
    over1_5goals:{
        type:Boolean,
        required:true,
        trim: true
    },
    yellow_cards:{
        type:Boolean,
        required:true,
        trim: true
    },
    creator:{
        type: Schema.Types.ObjectId,
        trim:true,
        ref: "Usuario"
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
})

module.exports = model("Favorito",favorito)