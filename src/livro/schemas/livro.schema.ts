import { Schema, Document } from 'mongoose';

const AvaliacaoSchema = new Schema({
  usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  nota: { type: Number, required: true },
  comentario: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  descricao: { type: String, required: true },
  avaliacoes: [AvaliacaoSchema],
});

export interface Livro extends Document {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  descricao: string;
  avaliacoes: Array<{
    usuarioId: string;
    nota: number;
    comentario: string;
    createdAt: Date;
  }>;
}
