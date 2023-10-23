const db = require('./db')

async function postInscricaoModal(req) {
    const id = req.params.id
    const papel = req.params.categoria

    const query = 'INSERT INTO inscricoes (UsuarioID, Papel) VALUES (?, ?)'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [id, papel])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function getInscricaoModal(req) {

    const query = "SELECT inscricoes.ID, inscricoes.UsuarioID, inscricoes.Papel, inscricoes.Status, usuarios.Email, usuarios.Nome FROM inscricoes  LEFT JOIN usuarios on inscricoes.UsuarioID = usuarios.ID WHERE inscricoes.status IS NULL"
    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function getAprovadosModal(req) {

    const query = "SELECT inscricoes.ID, inscricoes.UsuarioID, inscricoes.Papel, inscricoes.Status, usuarios.Email, usuarios.Nome FROM inscricoes  LEFT JOIN usuarios on inscricoes.UsuarioID = usuarios.ID WHERE inscricoes.status = 1"
    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function postSalvarRelacaoModal(req) {
    const relacoes = req.body

    const query = "INSERT INTO solicitacoesmentoria (MentorID, MentoradoID) VALUES (?, ?)";

    try {
        for (const relacao of relacoes) {
            const result = await db.exec(query, [relacao.mentorID, relacao.mentoradoID]);
            console.log('Resultado da inserção para uma relação:', result);
            console.log(relacao.mentorID)
        }
        return { success: true, message: 'Inserções bem-sucedidas' };
    } catch (error) {
        console.error('Erro ao executar as inserções:', error);
        throw error;
    }
}

async function postAprovacaoModal(req) {
    const id = req.params.id
    const status = req.params.status

    const query = 'UPDATE inscricoes SET Status = ? WHERE ID = ?'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [status, parseInt(id)])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}


module.exports = {
    postInscricaoModal,
    getInscricaoModal,
    postSalvarRelacaoModal,
    postAprovacaoModal,
    getAprovadosModal
}