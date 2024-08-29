import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { Users } from "./User"
@Entity()
export class Comments{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, (user) => user.favorites) user: Users;

    @Column()
    movie: number

    @Column()
    content: string


}
