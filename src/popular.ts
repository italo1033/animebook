import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LivrosService } from './livro/livro.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { AvaliacoesService } from './avaliacao/avaliacao.service';
import { faker } from '@faker-js/faker';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const livrosService = app.get(LivrosService);
  const usuariosService = app.get(UsuariosService);
  const avaliacoesService = app.get(AvaliacoesService);

  // Criando livros
  for (let i = 0; i < 1000; i++) {
    await livrosService.criarLivro({
      titulo: faker.lorem.words(3),
      autor: faker.name.fullName(),
      genero: faker.music.genre(),
      descricao: faker.lorem.paragraph(),
    });
  }

  // Criando usuários
  const usuarios = [];
  for (let i = 0; i < 100; i++) {
    const usuario = await usuariosService.criarUsuario({
      nome: faker.name.fullName(),
      email: faker.internet.email(),
      preferencias: [faker.music.genre(), faker.music.genre()],
    });
    usuarios.push(usuario);
  }

  // Adicionando avaliações
  const livros = await livrosService.listarLivros();
  for (const usuario of usuarios) {
    for (let i = 0; i < 30; i++) {
      const livro = faker.helpers.arrayElement(livros);
      await avaliacoesService.criarAvaliacao({
        usuarioId: usuario.id,
        livroId: livro.id,
        nota: faker.number.int({ min: 1, max: 5 }),
        comentario: faker.lorem.sentences(2),
      });
    }
  }

  console.log('Banco de dados populado com sucesso!');
  await app.close();
}

bootstrap();
