import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivrosController } from './livro.controller';
import { LivrosService } from './livro.service';
import { Livro, LivroSchema } from './schemas/livro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Livro', schema: LivroSchema }]),
  ],
  controllers: [LivrosController],
  providers: [LivrosService],
  exports: [LivrosService], 
})
export class LivroModule {}
