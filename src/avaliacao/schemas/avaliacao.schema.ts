import { Schema, Document } from 'mongoose';

export const AvaliacaoSchema = new Schema({
  usuarioId: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  livroId: { type: Schema.Types.ObjectId, ref: 'Livro', required: true }, 
  nota: { type: Number, required: true, min: 1, max: 5 }, 
  comentario: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, 
});

export interface Avaliacao extends Document {
  id: string;
  usuarioId: string;
  livroId: string;
  nota: number;
  comentario: string;
  createdAt: Date;
}
