import mongoose from 'mongoose';

export const connectToMongo = async (mongoURI: string): Promise<void> => {
  if (!mongoURI) {
    throw new Error('A URL de conexão do MongoDB não está definida.');
  }

  try {
    await mongoose.connect(mongoURI);
    console.log(`Conectado com sucesso ao MongoDB!`);
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};