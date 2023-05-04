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
    goals_conceded_minutes:{
        type:Boolean,
        required:true,
        trim: true
    },
    goals:{
        type:Boolean,
        required:true,
        trim: true
    },
    cleansheets:{
        type:Boolean,
        required:true,
        trim: true
    },
    draw:{
        type:Boolean,
        required:true,
        trim: true
    },
    lost:{
        type:Boolean,
        required:true,
        trim: true
    },
    goals_conceded:{
        type:Boolean,
        required:true,
        trim: true
    },
    win:{
        type:Boolean,
        required:true,
        trim: true
    },
    scoring_goal_minutes:{
        type:Boolean,
        required:true,
        trim: true
    },
    failed_to_score:{
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