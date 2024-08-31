import "reflect-metadata"
import { DataSource } from "typeorm"
const dotenv = require('dotenv')

dotenv.config()

const HOST = process.env.BDHOST
const URL = process.env.BDURL
const PASS =process.env.BDPASS

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    url: URL,
    port: 5432,
    username: "default",
    password: PASS,
    database: "projects",
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
//teste
AppDataSource.initialize()
.then(() => {
console.log("Data Source inicializado!");
})
.catch((err) => {
console.error("Erro na inicialização do Data Source:", err);
});

export default AppDataSource;
