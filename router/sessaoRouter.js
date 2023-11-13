const { Router } = require("express")
const { postSalvarSessao, postSalvarRelatoMentor, postSalvarRelatoMentorado } = require("../controller/sessaoController")

const router = Router()

router.post('/', postSalvarSessao)
router.post('/mentor', postSalvarRelatoMentor)
router.post('/mentorado', postSalvarRelatoMentorado)

module.exports = router