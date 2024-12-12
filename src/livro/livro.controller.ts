import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { LivrosService } from './livro.service';
import { Livro } from './schemas/livro.schema';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  async criarLivro(
    @Body() body: { titulo: string; autor: string; genero: string; descricao: string },
  ): Promise<Livro> {
    return this.livrosService.criarLivro(body);
  }

  @Get()
  async listarLivros(): Promise<Livro[]> {
    return this.livrosService.listarLivros();
  }

  @Get('buscar/titulo')
  async buscarPorTitulo(@Query('titulo') titulo: string): Promise<Livro[]> {
    return this.livrosService.buscarPorTitulo(titulo);
  }

  @Get('buscar/genero')
  async buscarPorGenero(@Query('genero') genero: string): Promise<Livro[]> {
    return this.livrosService.buscarPorGenero(genero);
  }
}
