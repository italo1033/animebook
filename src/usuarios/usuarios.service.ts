import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './schemas/usuario.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

  async criarUsuario(data: { nome: string; email: string; preferencias: string[] }): Promise<Usuario> {
    const usuario = new this.usuarioModel(data);
    return usuario.save();
  }

  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async buscarUsuarioPorId(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }
}
