import routes from "./routes";
const cors = require('cors')

const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 3000

const app = express();

app.use(cors());

app.use(express.json());

app.listen(port, ()=> {
    console.log("Rodando Na Porta", port)
})

app.use(routes);


