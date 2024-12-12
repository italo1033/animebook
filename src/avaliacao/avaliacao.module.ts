import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AvaliacoesController } from './avaliacao.controller';
import { AvaliacoesService } from './avaliacao.service';
import { Avaliacao, AvaliacaoSchema } from './schemas/avaliacao.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Avaliacao', schema: AvaliacaoSchema }]),
  ],
  controllers: [AvaliacoesController],
  providers: [AvaliacoesService],
  exports: [AvaliacoesService],
})
export class AvaliacaoModule {}
