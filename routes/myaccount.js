const {Router} = require("express")
const { createPreferences,readPreferences,updatePreferences,deletePreferences } = require("../controllers/myAccountController")
const verifyToken = require("../middlewares/verifyToken")
const validationErrors = require("../middlewares/validationErrors")

const { check } = require("express-validator")

const router = Router()

router.post("/createpreferences",[check("equipos","Campo Obligatorio").not().isEmpty(), check("corners","Campo Obligatorio").not().isEmpty(),check("over1_5goals","Campo Obligatorio").not().isEmpty(),check("yellow_cards","Campo Obligatorio").not().isEmpty()],[validationErrors,verifyToken],createPreferences)
router.get("/readpreferences",[verifyToken],readPreferences)
router.put("/updatepreferences/:id",[check("equipos","Campo Obligatorio").not().isEmpty()],[validationErrors,verifyToken],updatePreferences)
router.delete("/deletepreferences/:id",[verifyToken],deletePreferences)




module.exports = router