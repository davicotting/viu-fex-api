import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user/user.controller';
import { GetProfileUseCase } from './application/use-cases/user/get-profile.use-case';
import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { PrismaService } from './infrastructure/database/prisma.service';
import { USER_REPOSITORY } from './domain/repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    GetProfileUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
