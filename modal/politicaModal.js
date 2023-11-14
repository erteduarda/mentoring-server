const db = require('./db')

async function postPoliticaModal(req) {
    const dados = req.body

    const query = 'UPDATE politica SET politica = (?)'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query, [dados.politica])

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

async function getPoliticaModal(req) {

    const query = 'SELECT * FROM politica'

    try {
        // Usando uma Promise para lidar com o resultado
        const rows = await db.exec(query)

        return rows;
    } catch (error) {
        console.error('Erro ao executar a consulta:', error)
        throw error;
    }
}

module.exports = { postPoliticaModal, getPoliticaModal }