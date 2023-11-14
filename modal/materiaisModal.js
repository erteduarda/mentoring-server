const db = require('./db')

async function postMateriaisModal(req) {
    const dados = req.body

    const query1 = 'SELECT * FROM material WHERE ID = ?'
    const rows = await db.exec(query1, [dados])

    if (rows === '') {
        var query = 'INSERT INTO material (ID, Link, Tipo) VALUES (?, ?, ?)'
        const rows = await db.exec(query, [dados.id, dados.link, dados.nome])
        return rows;
    } else {
        var query = 'UPDATE material SET link = ? WHERE Tipo = ? AND ID = ?'
        const rows = await db.exec(query, [dados.link, dados.nome, dados.id])
        return rows;
    }
}

async function getMateriaisModal(req) {

    const dados = req.params.id

    const query = 'SELECT * FROM material WHERE ID = ?'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { postMateriaisModal, getMateriaisModal }