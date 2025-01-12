import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/shared/decorator/public.decorator';
import { AuthenticationService } from '../services/authentication.service';
import { SignUpDto } from '../dto/signup.dto';
import { SignInDto } from '../dto/signin.dto';
import { User } from 'src/database/entities/User.entity';

@Controller('authentication')
export class AuthenticationController {
  constructor(private _authenticationService: AuthenticationService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() signInDto: SignInDto): Promise<{ access_token: string }> {
    return this._authenticationService.signIn(
      signInDto.email,
      signInDto.password,
    );
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() user: SignUpDto): Promise<User> {
    return this._authenticationService.signUp(user);
  }
}
