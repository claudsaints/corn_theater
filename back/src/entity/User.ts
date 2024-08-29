import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"
import { Favorite } from "./Favorite"
import { Comments } from "./Comment"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @OneToMany(() => Favorite, (favorite) => favorite.user) favorites: Favorite[];

    @OneToMany(() => Comments, (comment) => comment.user) comment : Comments[];

}
