const { Router } = require("express")
const { postMateriais, getMateriais } = require("../controller/materiaisController")

const router = Router()

router.post('/', postMateriais)
router.get('/:id', getMateriais)

module.exports = router