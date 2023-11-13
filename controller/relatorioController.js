const { getRelatorioModal } = require("../model/relatorioModal")

async function getRelatorio(req, res) {
    try {
        const relatorio = await getRelatorioModal(req)
        res.send(relatorio)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { getRelatorio }
