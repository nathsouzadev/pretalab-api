import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('Conexão ao MongoDB realizada com sucesso!');
    } catch (e) {
        console.error('Erro ao conectar ao MongoDB', e);
        process.exit(1);
    }

};
