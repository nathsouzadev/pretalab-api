
import dotenv from 'dotenv';
dotenv.config();

import app  from "./server"; 
import { connectToMongo } from "./database/mongooseConnection";

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error("Error: The MongoDB connection URL is not defined.");
    process.exit(1); 
}

connectToMongo(MONGO_URL)

  .then(() => {
    app.listen(PORT, () => {
      console.log(`O servidor está rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Falha ao iniciar o servidor devido a um erro de conexão com o banco de dados.", err);
    process.exit(1);
  });