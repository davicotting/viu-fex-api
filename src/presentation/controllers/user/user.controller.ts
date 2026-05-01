import { Controller, Get } from '@nestjs/common';
import { Session } from '@thallesp/nestjs-better-auth';
import type { UserSession } from '@thallesp/nestjs-better-auth';
import { GetProfileUseCase } from '../../../application/use-cases/user/get-profile.use-case';

@Controller('users')
export class UserController {
  constructor(private readonly getProfileUseCase: GetProfileUseCase) {}

  @Get('me')
  async getProfile(@Session() session: UserSession) {
    return this.getProfileUseCase.execute(session.user.id);
  }
}