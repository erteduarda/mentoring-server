const { postSalvarSessaoModal, postSalvarRelatoMentoradoService, postSalvarRelatoMentorService, postImagemService } = require("../modal/sessaoModal")

async function postSalvarSessao(req, res) {
    try {
        const inscricao = await postSalvarSessaoModal(req)
        res.send(inscricao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postSalvarRelatoMentorado(req, res) {
    try {
        const response = await postSalvarRelatoMentoradoService(req)
        res.send(response)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postSalvarRelatoMentor(req, res) {
    try {
        const response = await postSalvarRelatoMentorService(req)
        res.send(response)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postImagem(req, res) {
    try {
        const response = await postImagemService(req)
        res.send(response)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    postSalvarSessao,
    postSalvarRelatoMentorado,
    postSalvarRelatoMentor,
    postImagem
}