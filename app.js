const express = require("express")
const cors = require("cors")
//rotas
const rotaUsuario = require("./router/usuarioRouter")
const rotaInscricao = require("./router/inscricaoRouter")
const rotaSessao = require("./router/sessaoRouter")
const rotaAgendar = require("./router/agendarRouter")
const rotaMateriais = require("./router/materiaisRouter")
const rotaPolitica = require("./router/politicaRouter")
const rotaChat = require("./router/chatRouter")
const rotaRelatorio = require("./router/relatorioRouter")

const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

const port = 8001

app.use("/usuario", rotaUsuario)
app.use("/inscricao", rotaInscricao)
app.use("/sessao", rotaSessao)
app.use("/agendar", rotaAgendar)
app.use("/materiais", rotaMateriais)
app.use("/politica", rotaPolitica)
app.use("/chat", rotaChat)
app.use("/relatorio", rotaRelatorio)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
