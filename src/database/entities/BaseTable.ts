import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'creationdate' })
  creationDate: Date;

  @UpdateDateColumn({ name: 'updatedate' })
  updateDate: Date;

  @DeleteDateColumn({ name: 'deletedate' })
  deleteDate: Date;
}
