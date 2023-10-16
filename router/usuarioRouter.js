const { Router } = require("express")
const { getUsuario, getLogarUsuario, getCadastrarUsuario } = require("../controller/usuarioController")

const router = Router()

router.get('/', getUsuario)
router.get('/:email/:senha', getLogarUsuario)
router.get('/:email/:senha/:nome', getCadastrarUsuario)

module.exports = router