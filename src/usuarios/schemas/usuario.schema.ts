import { Schema, Document } from 'mongoose';

export const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  preferencias: { type: [String], required: true }, 
  livrosAvaliados: [{ type: Schema.Types.ObjectId, ref: 'Livro' }],
});

export interface Usuario extends Document {
  id: string;
  nome: string;
  email: string;
  preferencias: string[];
  livrosAvaliados: string[];
}
