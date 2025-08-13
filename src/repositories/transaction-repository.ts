import { TransactionModel, ITransaction } from "../database/mongooseTransactionModel";

export class TransactionRepository {
    public async getAllTransactions(): Promise<ITransaction[]> {
        return await TransactionModel.find();
    }

    public async getTransactionById(id: string): Promise<ITransaction | null> {
        const transaction = await TransactionModel.findById(id).exec();
        return transaction ? transaction.toObject() : null;
    }

    public async createTransaction(data: Omit<ITransaction, 'id'>): Promise<ITransaction> {
        const newTransaction = new TransactionModel(data);
        await newTransaction.save();
        return newTransaction.toObject();
    }
}