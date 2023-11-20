const { Router } = require("express")
const { postSalvarSessao, postSalvarRelatoMentor, postSalvarRelatoMentorado, postImagem } = require("../controller/sessaoController")

const router = Router()

router.post('/', postSalvarSessao)
router.post('/mentor', postSalvarRelatoMentor)
router.post('/mentorado', postSalvarRelatoMentorado)
router.post('/imagem', postImagem)

module.exports = router