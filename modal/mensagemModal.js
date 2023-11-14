const db = require('./db')

async function postMensagemModal(req) {
    const dados = req.body

    const query = 'INSERT INTO chat (mensagem, relacionamentoID, userID) VALUES (?, ?, ?)'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados.mensagem, dados.id, dados.user])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function getMensagemModal(req) {

    const dados = req.params.id

    const query = 'SELECT * FROM chat WHERE relacionamentoID = ? ORDER BY ID DESC'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { postMensagemModal, getMensagemModal }