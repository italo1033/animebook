import * as Benchmark from 'benchmark';
import { LivrosService } from '../src/livro/livro.service';
import { UsuariosService } from '../src/usuarios/usuarios.service';
import { AvaliacoesService } from '../src/avaliacao/avaliacao.service';
import { PrismaService } from '../src/prisma/prisma.service';

// Instância do PrismaService
const prismaService = new PrismaService();

// Instância dos serviços
const livrosService = new LivrosService(prismaService);
const usuariosService = new UsuariosService(prismaService);
const avaliacoesService = new AvaliacoesService(prismaService);

const suite = new Benchmark.Suite();

// Funções de teste para cada funcionalidade
async function testeListarLivros() {
  await livrosService.listarLivros();
}

async function testeBuscarLivroPorTitulo() {
  await livrosService.buscarPorTitulo('Dragon Ball');
}

async function testeListarUsuarios() {
  await usuariosService.listarUsuarios();
}

async function testeListarAvaliacoesPorLivro() {
  await avaliacoesService.listarAvaliacoesPorLivro(1); // ID de exemplo
}

async function testeCriarLivro() {
  await livrosService.criarLivro({
    titulo: 'Livro Teste',
    autor: 'Autor Teste',
    genero: 'Ficção',
    descricao: 'Descrição curta para teste',
  });
}

// Adiciona os testes ao suite
suite
  .add('Listar Livros', {
    defer: true,
    fn: async (deferred: Benchmark.Deferred) => {
      await testeListarLivros();
      deferred.resolve();
    },
  })
  .add('Buscar Livro por Título', {
    defer: true,
    fn: async (deferred: Benchmark.Deferred) => {
      await testeBuscarLivroPorTitulo();
      deferred.resolve();
    },
  })
  .add('Listar Usuários', {
    defer: true,
    fn: async (deferred: Benchmark.Deferred) => {
      await testeListarUsuarios();
      deferred.resolve();
    },
  })
  .add('Listar Avaliações por Livro', {
    defer: true,
    fn: async (deferred: Benchmark.Deferred) => {
      await testeListarAvaliacoesPorLivro();
      deferred.resolve();
    },
  })
  .add('Criar Livro', {
    defer: true,
    fn: async (deferred: Benchmark.Deferred) => {
      await testeCriarLivro();
      deferred.resolve();
    },
  })
  .on('cycle', (event: Benchmark.Event) => {
    console.log(String(event.target));
  })
  .on('complete', function (this: Benchmark.Suite) {
    console.log(`Testes concluídos. Mais rápido: ${this.filter('fastest').map('name')}`);
    prismaService.$disconnect();
  })
  .run({ async: true });