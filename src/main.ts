import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use('/uploads', express.static('uploads'));
  app.use(express.static('/client/dist/front-end'));
  await app.init();
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
 

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
