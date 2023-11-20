const db = require('./db')

async function postAgendarModal(req) {
    const data = req.body.data
    const hora = req.body.hora
    const local = req.body.local
    const numSessao = req.body.sessao
    const relacionamentoID = req.body.dados[0].relacionamentoID

    const agendaExistente = 'SELECT * FROM sessoesmentoria WHERE RelacionamentoID = ? AND NumeroSessao = ?'
    const query = 'INSERT INTO sessoesmentoria (Data, Hora, Local, NumeroSessao, RelacionamentoID) VALUES (?, ?, ?, ?, ?)'

    try {
        const rowsAgenda = await db.exec(agendaExistente, [relacionamentoID, numSessao]);
        if (rowsAgenda.length === 0) {
            // No existing session, proceed with insertion
            const rows = await db.exec(query, [data, hora, local, numSessao, relacionamentoID]);
            return rows;
        } else {
            // Session already exists
            return "Sessão já existe.";
        }
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
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