import {TransactionRepository} from "../repository/transactionRepository";
import { ITransaction } from "../database/MongooseTransactionModel";

export class TransactionService { 
    private transactionRepository: TransactionRepository;

    constructor(transactionRepository: TransactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public async createTransactions(data: ITransaction): Promise<ITransaction> {
        return await this.transactionRepository.create(data);
    };

    public async getTransactionsById(id: string): Promise<ITransaction | null > {
        return await this.transactionRepository.getById(id);
    };

}



