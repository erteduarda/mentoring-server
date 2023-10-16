const express = require("express")
const cors = require("cors")
//rotas
const rotaUsuario = require("./router/usuarioRouter")
const rotaInscricao = require("./router/inscricaoRouter")

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8001

app.use("/usuario", rotaUsuario)
app.use("/inscricao", rotaInscricao)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
