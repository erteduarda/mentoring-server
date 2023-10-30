const { Router } = require("express")
const { postInscricao, getInscricao, postSalvarRelacao, postInscricaoAprovacao, getAprovados, getAprovar } = require("../controller/inscricaoController")

const router = Router()

router.post('/:id/:categoria', postInscricao)
router.post('/aprovacao/:id/:status', postInscricaoAprovacao)
router.post('/relacao', postSalvarRelacao)

router.get('/aprovar/:id', getAprovar)
router.get('/', getInscricao)
router.get('/aprovados', getAprovados)


module.exports = router