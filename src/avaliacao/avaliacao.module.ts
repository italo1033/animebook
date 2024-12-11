import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacao.service';
import { AvaliacoesController } from './avaliacao.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importa o PrismaModule
  controllers: [AvaliacoesController],
  providers: [AvaliacoesService],
})
export class AvaliacaoModule {}
