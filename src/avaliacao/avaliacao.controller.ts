import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AvaliacoesService } from './avaliacao.service';
import { ApiTags, ApiOperation, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { Avaliacao } from '@prisma/client';

@Controller('avaliacoes')
@ApiTags('avaliacoes')
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  // Criar uma avaliação
  @Post()
  @ApiOperation({ summary: 'Cria uma avaliação para um livro' })
  @ApiBody({
    description: 'Dados da avaliação',
    schema: {
      example: {
        usuarioId: 1,
        livroId: 1,
        nota: 5,
        comentario: 'Excelente livro!',
      },
    },
  })
  async criarAvaliacao(
    @Body() body: { usuarioId: number; livroId: number; nota: number; comentario: string },
  ): Promise<Avaliacao> {
    return this.avaliacoesService.criarAvaliacao(body.usuarioId, body.livroId, body.nota, body.comentario);
  }

  // Listar todas as avaliações de um livro
  @Get('livro/:livroId')
  @ApiOperation({ summary: 'Lista todas as avaliações de um livro' })
  @ApiParam({ name: 'livroId', description: 'ID do livro' })
  async listarAvaliacoesPorLivro(@Param('livroId') livroId: number): Promise<Avaliacao[]> {
    return this.avaliacoesService.listarAvaliacoesPorLivro(livroId);
  }

  // Listar todas as avaliações de um usuário
  @Get('usuario/:usuarioId')
  @ApiOperation({ summary: 'Lista todas as avaliações de um usuário' })
  @ApiParam({ name: 'usuarioId', description: 'ID do usuário' })
  async listarAvaliacoesPorUsuario(@Param('usuarioId') usuarioId: number): Promise<Avaliacao[]> {
    return this.avaliacoesService.listarAvaliacoesPorUsuario(usuarioId);
  }
}
