import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function mongoConnect() {
    const MONGO_URL = process.env.MONGO_URL;

    if(!MONGO_URL){
        throw new Error('Não foi possível conectar ao MongoDB');
    }
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('Conexão ao MongoDB realizada com sucesso!');
    } catch (e) {
        console.error('Erro ao conectar ao MongoDB', e);
        process.exit(1);
    }

};
