import { Role } from 'src/role/role.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Matches the exact table name in the database
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 15 })
  username: string;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column()
  password: string;

  @Column({ 
    type: 'enum',
    enum: Role, 
    default: Role.USER 
  })
  role: Role;
}