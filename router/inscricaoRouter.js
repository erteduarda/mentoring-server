const { Router } = require("express")
const { postInscricao, getInscricao, postSalvarRelacao, postInscricaoAprovacao, getAprovados } = require("../controller/inscricaoController")

const router = Router()

router.post('/:id/:categoria', postInscricao)
router.post('/aprovacao/:id/:status', postInscricaoAprovacao)
router.post('/', postSalvarRelacao)

router.get('/', getInscricao)
router.get('/aprovados', getAprovados)


module.exports = router