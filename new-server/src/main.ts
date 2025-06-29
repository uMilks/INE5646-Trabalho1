import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // remove propriedades não declaradas no DTO
    forbidNonWhitelisted: true, // retorna erro se vier propriedade extra
    transform: true,          // transforma payload para instância do DTO
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
