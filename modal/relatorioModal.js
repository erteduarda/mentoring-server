const db = require('./db')

async function getRelatorioModal(req) {

    const dados = req.params.id

    const query = 'SELECT DISTINCT sm.`Data`, sm.Hora, sm.`Local`, sm.RelatoMentor, sm.RelatoMentorado, sm.NumeroSessao, rm.MentorID, rm.MentoradoID, (SELECT u.Nome FROM usuarios u WHERE u.ID = rm.MentorID) AS NomeMentor, (SELECT u.Nome FROM usuarios u WHERE u.ID = rm.MentoradoID) AS NomeMentorado FROM mentoring.sessoesmentoria AS sm LEFT JOIN relacionamentomentoria AS rm ON sm.RelacionamentoID = rm.ID WHERE rm.MentorID = ? OR rm.MentoradoID = ?;'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados, dados])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { getRelatorioModal }