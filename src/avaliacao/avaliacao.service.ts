import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Avaliacao, Livro, Usuario } from '@prisma/client';

@Injectable()
export class AvaliacoesService {
  constructor(private readonly prisma: PrismaService) {}

  // Criar uma avaliação
  async criarAvaliacao(
    usuarioId: number,
    livroId: number,
    nota: number,
    comentario: string,
  ): Promise<Avaliacao> {
    return this.prisma.avaliacao.create({
      data: {
        usuarioId,
        livroId,
        nota,
        comentario,
      },
    });
  }

  // Listar todas as avaliações de um livro
  async listarAvaliacoesPorLivro(livroId: number): Promise<Avaliacao[]> {
    return this.prisma.avaliacao.findMany({
      where: { livroId },
      include: {
        usuario: true,
      },
    });
  }

  // Listar todas as avaliações feitas por um usuário
  async listarAvaliacoesPorUsuario(usuarioId: number): Promise<Avaliacao[]> {
    return this.prisma.avaliacao.findMany({
      where: { usuarioId },
      include: {
        livro: true,
      },
    });
  }
}
