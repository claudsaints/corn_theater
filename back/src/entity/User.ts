import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"
import { Favorite } from "./Favorite"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @OneToMany(() => Favorite, (favorite) => favorite.user) favorites: Favorite[];

}
