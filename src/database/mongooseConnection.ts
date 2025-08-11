import mongoose from 'mongoose';

export const connectToMongo = async (): Promise<void> => {
    const MONGO_URL = process.env.MONGO_URL;
    if (!MONGO_URL) {
        console.log('Valor de MONGO_URL:', MONGO_URL);
        console.error('MONGO_URL environment variable is not defined.');
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB successfully!!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};