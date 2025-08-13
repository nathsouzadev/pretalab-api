import { ITransaction } from "../database/mongooseTransactionModel";
import { TransactionRepository } from "../repositories/transaction-repository";

export class TransactionService {
  private transactionRepository: TransactionRepository;

  constructor(transactionRepository: TransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public async getTransactionById(id: string): Promise<ITransaction | null> {
    return await this.transactionRepository.getTransactionById(id);
  }

  public async getAllTransactions(): Promise<ITransaction[]> {
    return await this.transactionRepository.getAllTransactions();
  }

  public async createTransaction(data: Omit<ITransaction, 'id'>): Promise<ITransaction> {
    return await this.transactionRepository.createTransaction(data);
  }
}