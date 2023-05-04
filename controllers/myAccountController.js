const Favorito = require("../models/preferences")


const createPreferences = async (req,res)=>{
   

    const {equipos,corners,over1_5goals,yellow_cards,goals_conceded_minutes,goals,cleansheets,draw,lost,goals_conceded,win,scoring_goal_minutes,failed_to_score} = req.body
    const id = req.uid

    const newPreference= new Favorito({equipos,corners,over1_5goals,yellow_cards,goals_conceded_minutes,goals,cleansheets,draw,lost,goals_conceded,win,scoring_goal_minutes,failed_to_score, creator:id})
    
    
    await newPreference.save()

    res.status(200).json({
        ok:true,
        msg:"Preferencias creadas",
        newPreference
    })
}

const readPreferences = async(req,res)=>{
    const id = req.uid

    try {
        const preferences = await Favorito.find({creator:id})
        return res.json({
            ok:true,
            msg:"Preferencia encontrada",
            preferences
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg:"Preferencias no encontradas"
        })
    }
}

const updatePreferences = async (req,res)=>{

    const {id} = req.params
    const {equipos} = req.body

    try {
        const preference = await Favorito.findByIdAndUpdate(id,{equipos}, {new: true})
        return res.json({
            ok:true,
            msg:"Tarea Actualizada",
            preference
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg:"Preferencia no actualizada"
        })
    }
}

const deletePreferences = async (req,res)=>{

    const {id} = req.params

    try {
        const preference = await Favorito.findByIdAndRemove(id)
        return res.json({
            ok:true,
            msg:"Preferencia Eliminada",
            preference
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg:"Preferencia no eliminada"
        })
    }

}

module.exports = {createPreferences,readPreferences,updatePreferences,deletePreferences}