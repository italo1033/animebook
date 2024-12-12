import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro } from './schemas/livro.schema';

@Injectable()
export class LivrosService {
  constructor(@InjectModel('Livro') private readonly livroModel: Model<Livro>) {}

  async criarLivro(data: { titulo: string; autor: string; genero: string; descricao: string }): Promise<Livro> {
    const livro = new this.livroModel(data);
    return livro.save();
  }

  async listarLivros(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async buscarPorTitulo(titulo: string): Promise<Livro[]> {
    return this.livroModel.find({ titulo: { $regex: titulo, $options: 'i' } }).exec();
  }

  async buscarPorGenero(genero: string): Promise<Livro[]> {
    return this.livroModel.find({ genero }).exec();
  }
}
