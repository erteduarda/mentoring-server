const { Router } = require("express")
const { postPolitica, getPolitica } = require("../controller/politicaController")

const router = Router()

router.post('/', postPolitica)
router.get('/', getPolitica)

module.exports = router