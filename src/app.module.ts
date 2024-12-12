import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LivroModule } from './livro/livro.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module'; 
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://is8:jPEhsgwgY3Y3r2r5@cluster0.bgwxo.mongodb.net/'), // Conexão com MongoDB
    UsuariosModule, 
    LivroModule, 
    AvaliacaoModule,
  ],
})
export class AppModule {}
