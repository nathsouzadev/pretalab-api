import { Transaction, transactions } from "../data";

export class TransactionService {
  private transactions: Transaction[];

  constructor() {
    this.transactions = transactions;
  }

  public async getTransactionById(id: string): Promise<Transaction | undefined> {
    const transaction = this.transactions.find((t) => t.id === id);
    return transaction;
  }

  public async getAllTransactions(): Promise<Transaction[]> {
    return this.transactions;
  }

  public async createTransaction(data: Transaction): Promise<Transaction> {
    this.transactions.push(data);
    
    return data;}
}