import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './schemas/usuario.schema';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criarUsuario(
    @Body() body: { nome: string; email: string; preferencias: string[] },
  ): Promise<Usuario> {
    return this.usuariosService.criarUsuario(body); // Chamada com um único objeto
  }

  @Get()
  async listarUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.listarUsuarios();
  }

  @Get(':id')
  async buscarUsuario(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.buscarUsuarioPorId(id);
  }
}
