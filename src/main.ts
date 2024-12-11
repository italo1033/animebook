import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de livros de anime')
    .setDescription('Documentação da API para gerenciamento de usuários, livros e avaliações')
    .setVersion('1.0')
    .addTag('usuarios') 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors();

  await app.listen(3000);
  console.log(`API executando em http://localhost:3000`);
  console.log(`Documentação disponível em http://localhost:3000/api-docs`);
}
bootstrap();
