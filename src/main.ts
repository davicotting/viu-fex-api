import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import type { Env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const configService = app.get(ConfigService<Env, true>);
  const port = configService.get('PORT', { infer: true });
  await app.listen(port);
}
bootstrap();
