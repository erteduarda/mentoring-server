const { getUsuarioModal, getLogarUsuarioModal, getCadastrarUsuarioModal } = require("../modal/usuarioModal")

async function getUsuario(req, res) {
    try {
        const usuario = await getUsuarioModal(req)
        res.send(usuario)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getLogarUsuario(req, res) {
    try {
        const usuario = await getLogarUsuarioModal(req)
        res.send(usuario)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getCadastrarUsuario(req, res) {
    try {
        const usuario = await getCadastrarUsuarioModal(req)
        res.send(usuario)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getUsuario,
    getLogarUsuario,
    getCadastrarUsuario
}