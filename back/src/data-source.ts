import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Favorite } from "./entity/Favorite"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "projects",
    synchronize: true,
    logging: false,
    entities: [User,Favorite],
    migrations: [],
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
