import { Column, Entity } from 'typeorm';
import { BaseTable } from './BaseTable';

@Entity({ schema: 'app', name: 'user' })
export class User extends BaseTable {
  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;
}
