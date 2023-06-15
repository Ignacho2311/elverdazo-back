const Favorito = require("../models/preferences")

const createPreferences = async (req, res) => {
    const {
        equipos,
        corners,
        ball_possession,
        yellow_cards,
        goals_conceded_minutes,
        goals,
        cleansheets,
        draw,
        lost,
        goals_conceded,
        win,
        scoring_goal_minutes,
        failed_to_score,
        number_of_goals,
        both_teams_to_score,

    } = req.body;
    const id = req.uid;

    const newPreference = new Favorito({
        equipos,
        corners,
        ball_possession,
        yellow_cards,
        goals_conceded_minutes,
        goals,
        cleansheets,
        draw,
        lost,
        goals_conceded,
        win,
        scoring_goal_minutes,
        failed_to_score,
        number_of_goals,
        both_teams_to_score,
        creator: id
    });

    try {
        await newPreference.save();
        res.status(200).json({
            ok: true,
            msg: "Preferencias creadas",
            newPreference
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al crear las preferencias",
            error
        });
    }
};

// const createPreferences = async (req,res)=>{
   

//     const {equipos,corners,over1_5goals,yellow_cards,goals_conceded_minutes,goals,cleansheets,draw,lost,goals_conceded,win,scoring_goal_minutes,failed_to_score} = req.body
//     const id = req.uid

//     const newPreference= new Favorito({equipos,corners,over1_5goals,yellow_cards,goals_conceded_minutes,goals,cleansheets,draw,lost,goals_conceded,win,scoring_goal_minutes,failed_to_score, creator:id})
    
    
//     await newPreference.save()

//     res.status(200).json({
//         ok:true,
//         msg:"Preferencias creadas",
//         newPreference
//     })
// }

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

const deletePreferencesByTeam = async (req, res) => {
    const { idEquipo } = req.params;
    const userId = req.uid;
  
    try {
      const preference = await Favorito.findOne({ creator: userId });
  
      if (!preference) {
        return res.status(404).json({
          ok: false,
          msg: "Preferencia no encontrada"
        });
      }
  
      const equipos = preference.equipos;
      const equipoIndex = equipos.indexOf(Number(idEquipo));
  
      if (equipoIndex !== -1 && equipos.length > 1) {
        equipos.splice(equipoIndex, 1);
      } else {
        return res.status(400).json({
          ok: false,
          msg: "No se puede eliminar el equipo, es el único en la preferencia"
        });
      }
  
      await preference.save();
  
      return res.json({
        ok: true,
        msg: "Equipo eliminado de la preferencia",
        equipoId: idEquipo
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: "Error al eliminar el equipo de la preferencia"
      });
    }
  };

  const updatePreference = async (req, res) => {
    const { idPreference } = req.params;
    const userId = req.uid;
    console.log(idPreference, userId);
  
    try {
      const preference = await Favorito.findOne({ creator: userId });
  
      if (!preference) {
        return res.status(404).json({
          ok: false,
          msg: 'Preferencia no encontrada',
        });
      }
  
      let updated = false;
  
      for (let attr in preference) {
        if (
          attr !== '_id' &&
          attr !== 'creator' &&
          attr !== 'equipos' &&
          String(preference[attr]) === String(idPreference)
        ) {
          preference[attr] = 0;
          updated = true;
        }
      }
  
      if (!updated) {
        return res.status(400).json({
          ok: false,
          msg: 'No se encontró un atributo con el id especificado',
        });
      }
  
      await preference.save();
  
      return res.json({
        ok: true,
        msg: 'Atributo eliminado de la preferencia',
        equipoId: idPreference,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: 'Error al eliminar el atributo de la preferencia',
      });
    }
  };
  
  
  
  

//   const updatePreference = async (req, res) => {
//     const { idPreference } = req.params;
//     const userId = req.uid;
//     console.log(userId, idPreference);
//     try {
//       const preference = await Favorito.findOne({ creator: userId });
  
//       if (!preference) {
//         return res.status(404).json({
//           ok: false,
//           msg: 'Preferencia no encontrada',
//         });
//       }
  
//       let updated = false;
  
//       for (let attr in preference) {
//         if (attr !== '_id' && preference[attr] === idPreference) {
//           preference[attr] = 0;
//           updated = true;
//         }
//       }
  
//       if (!updated) {
//         return res.status(400).json({
//           ok: false,
//           msg: 'No se encontró un atributo con el id especificado',
//         });
//       }
  
//       await preference.save();
  
//       return res.json({
//         ok: true,
//         msg: 'Preferencia actualizada',
//         preference,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         ok: false,
//         msg: 'Error al actualizar la preferencia',
//       });
//     }
//   };
  
  
  
  

//   const obtenerEquipos = async (req, res) => {
//     try {
//       const userId = req.uid;
      
//       // Obtén las preferencias del usuario desde la base de datos
//       const preference = await Favorito.findOne({ creator: userId });
  
//       if (!preference) {
//         return res.status(404).json({
//           ok: false,
//           msg: "Preferencia no encontrada"
//         });
//       }
  
//       const equipos = preference.equipos;
  
//       return res.json({
//         ok: true,
//         equipos: equipos
//       });
//     } catch (error) {
//       return res.status(500).json({
//         ok: false,
//         msg: "Error al obtener la lista de equipos"
//       });
//     }
//   };
  
  
  
  
  
  
  
  


module.exports = {createPreferences,readPreferences,updatePreferences,deletePreferences,deletePreferencesByTeam,updatePreference}