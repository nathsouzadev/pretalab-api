import {TransactionsModel, ITransaction} from "../database/MongooseTransactionModel";

export class TransactionRepository {

    public async create(data: ITransaction): Promise<ITransaction> {
        const newTransaction = new TransactionsModel(data);
        return await newTransaction.save();
    };

    public async getById(id: string): Promise<ITransaction | null> {
        return await TransactionsModel.findById(id);
    };


}