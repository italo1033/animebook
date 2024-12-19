import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Criar usuários simulados
  for (let i = 0; i < 1000; i++) {
    await prisma.usuario.create({
      data: {
        nome: faker.name.fullName(),
        email: faker.internet.email(),
        preferencias: faker.helpers.arrayElements(
          ['Ficção', 'Fantasia', 'História', 'Mistério', 'Ciência', 'Tecnologia'],
          faker.number.int({ min: 1, max: 3 })
        ).join(', '),
      },
    });
  }

  // Criar livros simulados
  for (let i = 0; i < 100; i++) {
    await prisma.livro.create({
      data: {
        titulo: faker.lorem.words(3),
        autor: faker.name.fullName(),
        genero: faker.helpers.arrayElement(['Fantasia', 'Ficção Científica', 'Romance', 'História', 'Mistério']),
        descricao: faker.lorem.paragraph(),
      },
    });
  }

  // Criar avaliações simuladas
  const usuarios = await prisma.usuario.findMany();
  const livros = await prisma.livro.findMany();

  for (let i = 0; i < 30; i++) {
    await prisma.avaliacao.create({
      data: {
        nota: faker.number.float({ min: 1, max: 5 }),
        comentario: faker.lorem.sentence(),
        usuarioId: faker.helpers.arrayElement(usuarios).id,
        livroId: faker.helpers.arrayElement(livros).id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
