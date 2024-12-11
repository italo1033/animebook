import { Module } from '@nestjs/common';
import { AvaliacaoController } from './avaliacao.controller';

@Module({
  controllers: [AvaliacaoController]
})
export class AvaliacaoModule {}
