const { Router } = require("express")
const { postAgendar, getAgenda } = require("../controller/agendarController")

const router = Router()

router.post('/', postAgendar)
router.get('/agenda/:id', getAgenda)

module.exports = router