import { Module } from '@nestjs/common';
import { LivrosService } from './livro.service';
import { LivrosController } from './livro.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importa o PrismaModule
  controllers: [LivrosController],
  providers: [LivrosService],
})
export class LivrosModule {}
