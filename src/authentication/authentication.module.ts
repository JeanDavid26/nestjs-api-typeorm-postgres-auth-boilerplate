import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './services/authentication.guard';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationGuard],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '14d' },
    }),
    SharedModule,
  ],
})
export class AuthenticationModule {}
