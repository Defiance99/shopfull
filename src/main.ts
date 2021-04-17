import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { Request, Response } from 'express';
import path, { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/uploads', express.static('uploads'));

  await app.init();
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  app.use(express.static('../client/dist/front-end'));

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
