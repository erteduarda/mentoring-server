const { postMateriaisModal, getMateriaisModal } = require("../model/materiaisModal")

async function postMateriais(req, res) {
    try {
        const materiais = await postMateriaisModal(req)
        res.send(materiais)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getMateriais(req, res) {
    try {
        const materiais = await getMateriaisModal(req)
        res.send(materiais)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
module.exports = { postMateriais, getMateriais }
