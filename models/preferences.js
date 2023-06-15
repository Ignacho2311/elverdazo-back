const {Schema, model } = require("mongoose")

const favorito= new Schema({
    equipos: [{
      type: Number,
      required: true
    }],
    corners: {
      type: Number,
      default: false
    },
    ball_possession: {
      type: Number,
      default: false
    },
    yellow_cards: {
      type: Number,
      default: false
    },
    goals_conceded_minutes: {
      type: Number,
      default: false
    },
    goals: {
      type: Number,
      default: false
    },
    cleansheets: {
      type: Number,
      default: false
    },
    draw: {
      type: Number,
      default: false
    },
    lost: {
      type: Number,
      default: false
    },
    goals_conceded: {
      type: Number,
      default: false
    },
    win: {
      type: Number,
      default: false
    },
    scoring_goal_minutes: {
      type: Number,
      default: false
    },
    failed_to_score: {
      type: Number,
      default: false
    },
    number_of_goals: {
      type: Number,
      default: false
    },
    both_teams_to_score: {
      type: Number,
      default: false
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });


// const favorito = new Schema ({
//     equipos:[{
//         type:Number,
//         required:true,
//         trim: true
//     }],
//     corners:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     over1_5goals:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     yellow_cards:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     goals_conceded_minutes:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     goals:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     cleansheets:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     draw:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     lost:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     goals_conceded:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     win:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     scoring_goal_minutes:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     failed_to_score:{
//         type:Boolean,
//         required:true,
//         trim: true
//     },
//     creator:{
//         type: Schema.Types.ObjectId,
//         trim:true,
//         ref: "Usuario"
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now()
//     },
// })

module.exports = model("Favorito",favorito)