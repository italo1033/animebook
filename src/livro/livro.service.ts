import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Livro } from '@prisma/client';

@Injectable()
export class LivrosService {
  constructor(private readonly prisma: PrismaService) {}

  // Criar um livro
  async criarLivro(data: { titulo: string; autor: string; genero: string; descricao: string }): Promise<Livro> {
    return this.prisma.livro.create({
      data,
    });
  }

  // Listar todos os livros
  async listarLivros(): Promise<Livro[]> {
    return this.prisma.livro.findMany();
  }

  // Buscar livros por título
  async buscarPorTitulo(titulo: string): Promise<Livro[]> {
    return this.prisma.livro.findMany({
      where: {
        titulo: {
          contains: titulo, 
        },
      },
    });
  }

  // Buscar livros por gênero
  async buscarPorGenero(genero: string): Promise<Livro[]> {
    return this.prisma.livro.findMany({
      where: {
        genero: {
          contains: genero, 
        },
      },
    });
  }
}
