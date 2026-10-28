import e from "express"
import cors from "cors"
import {router as ProprietarioRouter} from "./controllers/proprietario.controller"
import {router as VeiculoRouter} from "./controllers/veiculos.controller"
import bodyParser from "body-parser"


const app = e()
const port = 3333

app.use(bodyParser.json())
app.use(cors())
app.get("/", (req, res) => res.send("HELLO"))

app.use("/proprietario", ProprietarioRouter)
app.use("/veiculo", VeiculoRouter)
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`));