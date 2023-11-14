const { postPoliticaModal, getPoliticaModal } = require("../modal/politicaModal")

async function postPolitica(req, res) {
    try {
        const Politica = await postPoliticaModal(req)
        res.send(Politica)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getPolitica(req, res) {
    try {
        const Politica = await getPoliticaModal(req)
        res.send(Politica)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
module.exports = { postPolitica, getPolitica }
