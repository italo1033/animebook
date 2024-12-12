import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AvaliacoesService } from './avaliacao.service';
import { Avaliacao } from './schemas/avaliacao.schema';

@Controller('avaliacoes')
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  @Post()
  async criarAvaliacao(
    @Body() body: { usuarioId: string; livroId: string; nota: number; comentario: string },
  ): Promise<Avaliacao> {
    return this.avaliacoesService.criarAvaliacao(body);
  }

  @Get('usuario')
  async buscarAvaliacoesPorUsuario(@Query('usuarioId') usuarioId: string): Promise<Avaliacao[]> {
    return this.avaliacoesService.buscarAvaliacoesPorUsuario(usuarioId);
  }

  @Get()
  async listarAvaliacoes(): Promise<Avaliacao[]> {
    return this.avaliacoesService.listarAvaliacoes();
  }
}
