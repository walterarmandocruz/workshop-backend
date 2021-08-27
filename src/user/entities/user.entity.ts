import { Role } from 'src/role/role.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'apellido', type: 'varchar' })
  apellido: string;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre: string;

  @Column({ name: 'username', type: 'varchar' })
  username: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'estado', type: 'boolean' })
  estado: boolean;

  @ManyToOne(type => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
