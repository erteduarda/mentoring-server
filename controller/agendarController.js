const { postAgendarModal, getAgendaModal } = require("../modal/agendarModal")

async function postAgendar(req, res) {
    try {
        const agendar = await postAgendarModal(req)
        res.send(agendar)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function getAgenda(req, res) {
    try {
        const agenda = await getAgendaModal(req)
        res.json(agenda)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { postAgendar, getAgenda }
