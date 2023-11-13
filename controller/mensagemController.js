const { postMensagemModal, getMensagemModal } = require("../model/mensagemModal")

async function postMensagem(req, res) {
    try {
        const Mensagem = await postMensagemModal(req)
        res.send(Mensagem)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getMensagem(req, res) {
    try {
        const Mensagem = await getMensagemModal(req)
        res.send(Mensagem)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
module.exports = { postMensagem, getMensagem }
