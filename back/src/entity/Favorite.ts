import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { User } from "./User"
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

    @ManyToOne(() => User, (user) => user.favorites) user: User;

}
