import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async criarUsuario(data: { nome: string; email: string; preferencias: string }) {
    return this.prisma.usuario.create({
      data,
    });
  }

  async listarUsuarios() {
    return this.prisma.usuario.findMany();
  }
}
