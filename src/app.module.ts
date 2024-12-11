import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LivroModule } from './livro/livro.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [PrismaModule, UsuariosModule, LivroModule, AvaliacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
