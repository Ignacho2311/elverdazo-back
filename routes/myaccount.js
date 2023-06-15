const {Router} = require("express")
const { createPreferences,readPreferences,updatePreferences,deletePreferences, deletePreferencesByTeam, updatePreference } = require("../controllers/myAccountController")
const verifyToken = require("../middlewares/verifyToken")
const validationErrors = require("../middlewares/validationErrors")

const { check } = require("express-validator")

const router = Router()

router.post("/createpreferences",[check("equipos","Campo Obligatorio").not().isEmpty()],[validationErrors,verifyToken],createPreferences)
router.get("/readpreferences",[verifyToken],readPreferences)
router.put("/updatepreferences/:id",[check("equipos","Campo Obligatorio").not().isEmpty()],[validationErrors,verifyToken],updatePreferences)
router.delete("/deletepreferences/:id",[verifyToken],deletePreferences)
router.delete("/deletepreferencesbyteam/:idEquipo",[verifyToken],deletePreferencesByTeam)
router.put("/updatepreference/:idPreference/",[verifyToken],updatePreference)

// Obtener lista de equipos
// router.get("/equipos",[verifyToken], obtenerEquipos);






module.exports = router