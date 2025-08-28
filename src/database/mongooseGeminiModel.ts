import mongoose, { Schema, Document } from 'mongoose';

export interface IContext {
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}

export interface IHistoricoContext extends Document {
    interactions: IContext[];
}

const MessageSchema: Schema = new Schema({
    role: { type: String, required: true, enum: ['user', 'model'] },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const ChatHistorySchema: Schema = new Schema({
    interactions: { type: [MessageSchema], required: true }
});

export const HistoricoModel = mongoose.model<IHistoricoContext>('GlobalChatHistory', ChatHistorySchema);