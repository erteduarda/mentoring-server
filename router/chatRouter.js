const { Router } = require("express")
const { postMensagem, getMensagem } = require("../controller/mensagemController")

const router = Router()

router.post('/', postMensagem)
router.get('/:id', getMensagem)

module.exports = router