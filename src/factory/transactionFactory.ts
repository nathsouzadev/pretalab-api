import {Transaction} from "../data";

interface TransactionsData {
    id: string, 
    date: string, 
    description: string, 
    amount: number, 
    type: "income" | "expense", 
    category: string
}

export default { 
    create: ({id, date, description, amount, type, category}: TransactionsData) => (
        {id, date, description, amount, type, category}
    )
}