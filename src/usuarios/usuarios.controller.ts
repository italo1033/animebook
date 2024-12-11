import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
@ApiTags('usuarios') // Tag para o Swagger
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({
    description: 'Dados do usuário a ser criado',
    schema: {
      example: {
        nome: 'João da Silva',
        email: 'joao.silva@example.com',
        preferencias: ['Ficção', 'História', 'Ciência'],
      },
    },
  })
  async criarUsuario(
    @Body() body: { nome: string; email: string; preferencias: string },
  ) {
    return this.usuariosService.criarUsuario({
      nome: body.nome,
      email: body.email,
      preferencias: body.preferencias,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  async listarUsuarios() {
    return this.usuariosService.listarUsuarios();
  }
}
