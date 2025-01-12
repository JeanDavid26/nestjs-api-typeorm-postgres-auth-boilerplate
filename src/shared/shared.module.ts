import { Module } from '@nestjs/common';
import { DatabaseManagerModule } from 'src/database/database-manager/database-manager.module';

@Module({
  imports: [DatabaseManagerModule],
  exports: [DatabaseManagerModule],
})
export class SharedModule {}
