const {Router} = require("express")
const { account } = require("../controllers/Account")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post("/",[verifyToken],account)
module.exports = router