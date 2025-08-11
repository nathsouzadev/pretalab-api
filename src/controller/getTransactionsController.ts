import { Request, Response } from 'express'; 
import { getTransactionsById } from '../services/transactionsService';

export const getTransactions = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const transaction = getTransactionsById(id); 
    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
    }
    return res.status(200).json(transaction);
}
