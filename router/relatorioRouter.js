const { Router } = require("express")
const { getRelatorio } = require("../controller/relatorioController")

const router = Router()

router.get('/:id', getRelatorio)

module.exports = router