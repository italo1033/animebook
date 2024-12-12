import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avaliacao } from './schemas/avaliacao.schema';

@Injectable()
export class AvaliacoesService {
  constructor(@InjectModel('Avaliacao') private readonly avaliacaoModel: Model<Avaliacao>) {}

  async criarAvaliacao(data: { usuarioId: string; livroId: string; nota: number; comentario: string }): Promise<Avaliacao> {
    const avaliacao = new this.avaliacaoModel(data);
    return avaliacao.save();
  }

  async buscarAvaliacoesPorUsuario(usuarioId: string): Promise<Avaliacao[]> {
    return this.avaliacaoModel.find({ usuarioId }).exec();
  }

  async listarAvaliacoes(): Promise<Avaliacao[]> {
    return this.avaliacaoModel.find().exec();
  }
}
