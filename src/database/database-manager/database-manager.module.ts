import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagerService } from './services/user-manager/user-manager.service';
import datasource from 'ormconfig';
import { User } from '../entities/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        await datasource.initialize();
        return datasource.options;
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserManagerService],
  exports: [UserManagerService],
})
export class DatabaseManagerModule {}
