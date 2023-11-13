const db = require('./db')

async function getRelatorioModal(req) {

    const dados = req.params.id

    const query = 'SELECT distinct sm.`Data`, sm.Hora, sm.`Local`, sm.RelatoMentor, sm.RelatoMentorado, sm.NumeroSessao, rm.MentorID,rm.MentoradoID FROM mentoring.sessoesmentoria AS sm LEFT JOIN relacionamentomentoria AS rm ON sm.RelacionamentoID = rm.ID LEFT JOIN usuarios AS u ON rm.MentorID = u.ID WHERE rm.MentorID = ? or rm.MentoradoID = ?;'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { getRelatorioModal }