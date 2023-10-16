const { postInscricaoModal, getInscricaoModal, postSalvarRelacaoModal } = require("../model/inscricaoModal")

async function postInscricao(req, res) {
    try {
        const inscricao = await postInscricaoModal(req)
        res.send(inscricao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getInscricao(req, res) {
    try {
        const inscricao = await getInscricaoModal(req)
        res.send(inscricao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postSalvarRelacao(req, res) {
    try {
        const inscricao = await postSalvarRelacaoModal(req)
        res.send(inscricao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    postInscricao,
    getInscricao,
    postSalvarRelacao
}