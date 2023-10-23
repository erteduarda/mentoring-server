const { Router } = require("express")
const { postSalvarSessao } = require("../controller/sessaoController")

const router = Router()

router.post('/', postSalvarSessao)

module.exports = router