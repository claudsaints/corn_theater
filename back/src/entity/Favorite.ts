import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { Users } from "./User"
@Entity()
export class Favorite{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    movieId: string

    @Column()
    title: string

    @Column()
    overview: string

    @Column()
    imgLink: string

    @ManyToOne(() => Users, (user) => user.favorites) user: Users;

}
