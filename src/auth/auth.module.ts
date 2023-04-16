import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [SignupModule, LoginModule]
})
export class AuthModule {}
