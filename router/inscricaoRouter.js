const { Router } = require("express")
const { postInscricao, getInscricao, postSalvarRelacao } = require("../controller/inscricaoController")

const router = Router()

router.post('/:id/:categoria', postInscricao)
router.get('/', getInscricao)
router.post('/', postSalvarRelacao)

module.exports = router