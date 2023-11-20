const express = require("express");
const cors = require("cors");

const app = express();

// Configure o limite para o corpo da requisição
app.use(express.json({ limit: '50mb' })); // Para JSON requests
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Para form-urlencoded requests

// Permita CORS para todas as origens
app.use(cors({ origin: "*" }));
//rotas
const rotaUsuario = require("./router/usuarioRouter")
const rotaInscricao = require("./router/inscricaoRouter")
const rotaSessao = require("./router/sessaoRouter")
const rotaAgendar = require("./router/agendarRouter")
const rotaMateriais = require("./router/materiaisRouter")
const rotaPolitica = require("./router/politicaRouter")
const rotaChat = require("./router/chatRouter")
const rotaRelatorio = require("./router/relatorioRouter")

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
