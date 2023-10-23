const db = require('./db')

async function postSalvarSessaoModal(req) {
    const sessao = req.body
    // return sessoes
    const query = "INSERT INTO sessoesmentoria (Data, Hora, Local, MentorID, MentoradoID, AssuntosDiscutidos, RelatoMentor, RelatoMentorado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    try {

        const result = await db.exec(query, [sessao.data, sessao.hora, sessao.local, sessao.mentorID, sessao.mentoradoID, sessao.assuntosDiscutidos, sessao.RelatoMentor, sessao.RelatoMentorado]);
        console.log('Resultado da inserção:', result);

        return { success: true, message: 'Inserções bem-sucedidas' };
    } catch (error) {
        console.error('Erro ao executar as inserções:', error);
        throw error;
    }
}


module.exports = {
    postSalvarSessaoModal
}