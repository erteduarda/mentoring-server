const { postInscricaoModal, getInscricaoModal, postSalvarRelacaoModal, postAprovacaoModal, getAprovadosModal, getAprovarModal } = require("../modal/inscricaoModal")

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

async function getAprovados(req, res) {
    try {
        const aprovados = await getAprovadosModal(req)
        res.send(aprovados)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postSalvarRelacao(req, res) {
    try {
        const salvar = await postSalvarRelacaoModal(req)
        res.send(salvar)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postInscricaoAprovacao(req, res) {
    try {
        const aprovacao = await postAprovacaoModal(req)
        res.send(aprovacao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getAprovar(req, res) {
    try {
        const aprovacao = await getAprovarModal(req)
        res.send(aprovacao)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    postInscricao,
    getInscricao,
    postSalvarRelacao,
    postInscricaoAprovacao,
    getAprovados,
    getAprovar
}