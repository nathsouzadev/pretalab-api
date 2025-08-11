import { TransactionModel, ITransaction } from "../database/mongooseTransactionModel";

export class TransactionRepository {
  public async getAllTransactions(): Promise<ITransaction[]> {
    return await TransactionModel.find();
  }

  public async getTransactionById(id: string): Promise<ITransaction | null> {
    return await TransactionModel.findById(id);
  }

  public async createTransaction(data: Omit<ITransaction, 'id'>): Promise<ITransaction> {
    const newTransaction = new TransactionModel(data);
    return await newTransaction.save();
  }
}