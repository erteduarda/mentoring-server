const db = require('./db')

async function getUsuarioModel() {
    return await db.exec("SELECT * FROM usuarios")
}

async function getLogarUsuarioModel(req) {
    const email = req.params.email
    const senha = req.params.senha

    const query = 'SELECT ID, Nome, Email, Papel FROM usuarios WHERE Email = ? AND Senha = ?';

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [email, senha]);

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        throw error;
    }
}

async function getCadastrarUsuarioModal(req) {
    const email = req.params.email
    const senha = req.params.senha
    const nome = req.params.nome
    const papel = 'Inscrito'
    
    const query = 'INSERT INTO usuarios (email, senha, nome, papel) VALUES (?, ?, ?, ?)';

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [email, senha, nome, papel]);

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error);
        throw error;
    }
}

module.exports = {
    getUsuarioModel,
    getLogarUsuarioModel,
    getCadastrarUsuarioModal
}