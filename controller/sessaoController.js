const { postSalvarSessaoModal} = require("../model/sessaoModal")

async function postSalvarSessao(req, res) {
    try {
        const inscricao = await postSalvarSessaoModal(req)
        res.send(inscricao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    postSalvarSessao
}