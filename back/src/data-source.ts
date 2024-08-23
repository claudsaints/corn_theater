import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
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
