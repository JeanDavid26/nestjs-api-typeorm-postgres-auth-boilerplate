import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseManagerModule } from './database/database-manager/database-manager.module';
import { BusinessModule } from './business/business.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [DatabaseManagerModule, BusinessModule, SharedModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
