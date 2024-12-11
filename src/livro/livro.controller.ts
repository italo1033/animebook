import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { LivrosService } from './livro.service';
import { ApiTags, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Livro } from '@prisma/client';

@Controller('livros')
@ApiTags('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo livro' })
  @ApiBody({
    description: 'Dados do livro a ser criado',
    schema: {
      example: {
        titulo: 'Dragon Ball Z',
        autor: 'Akira toryama',
        genero: 'Anime',
        descricao: '...',
      },
    },
  })
  async criarLivro(@Body() body: { titulo: string; autor: string; genero: string; descricao: string }): Promise<Livro> {
    return this.livrosService.criarLivro(body);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os livros' })
  async listarLivros(): Promise<Livro[]> {
    return this.livrosService.listarLivros();
  }

  @Get('buscar-titulo')
  @ApiOperation({ summary: 'Busca livros por título' })
  @ApiQuery({
    name: 'titulo',
    description: 'Título do livro para busca',
    type: String,
  })
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Livro[]> {
    return this.livrosService.buscarPorTitulo(titulo);
  }

  @Get('buscar-genero')
  @ApiOperation({ summary: 'Busca livros por gênero' })
  @ApiQuery({
    name: 'genero',
    description: 'Gênero do livro para busca',
    type: String,
  })
  async buscarPorGenero(@Query('genero') genero: string): Promise<Livro[]> {
    return this.livrosService.buscarPorGenero(genero);
  }
}
