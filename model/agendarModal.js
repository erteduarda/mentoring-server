const db = require('./db')

async function postAgendarModal(req) {
    const data = req.body.data
    const hora = req.body.hora
    const local = req.body.local
    const numSessao = req.body.sessao
    const relacionamentoID = req.body.dados[0].relacionamentoID

    const query = 'INSERT INTO sessoesmentoria (Data, Hora, Local, NumeroSessao, RelacionamentoID) VALUES (?, ?, ?, ?, ?)'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [data, hora, local, numSessao, relacionamentoID])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function getAgendaModal(req) {

    const relacionamentoID = req.params.id

    const query = 'SELECT * FROM sessoesmentoria WHERE RelacionamentoID = ?'
    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [relacionamentoID])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { postAgendarModal, getAgendaModal }