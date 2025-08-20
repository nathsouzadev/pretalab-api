export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type Purchase = {
  id: string;
  date: string;
  total: number;
  items: any[];
};

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "2024-07-15T10:00:00Z",
    description: "Salário de Julho/24",
    amount: 5000,
    type: "income",
    category: "Salário",
  },
  {
    id: "2",
    date: "2024-07-15T12:30:00Z",
    description: "Aluguel",
    amount: 1500,
    type: "expense",
    category: "Moradia",
  },
  {
    id: "3",
    date: "2024-07-16T09:00:00Z",
    description: "Compras no Supermercado",
    amount: 350.75,
    type: "expense",
    category: "Alimentação",
  },
  {
    id: "4",
    date: "2024-07-17T18:00:00Z",
    description: "Venda de item usado",
    amount: 120,
    type: "income",
    category: "Renda Extra",
  },
  {
    id: "5",
    date: "2024-07-18T20:00:00Z",
    description: "Jantar fora",
    amount: 85.5,
    type: "expense",
    category: "Lazer",
  },
  {
    id: "6",
    date: "2024-07-20T11:00:00Z",
    description: "Conta de Internet",
    amount: 99.9,
    type: "expense",
    category: "Contas",
  },
  {
    id: "7",
    date: "2024-07-22T14:00:00Z",
    description: "Reembolso de despesa",
    amount: 50,
    type: "income",
    category: "Outros",
  },
  {
    id: "8",
    date: "2024-07-25T08:00:00Z",
    description: "Gasolina",
    amount: 180,
    type: "expense",
    category: "Transporte",
  },
  {
    id: "9",
    date: "2024-08-01T10:00:00Z",
    description: "Pagamento Freelance",
    amount: 800,
    type: "income",
    category: "Renda Extra",
  },
  {
    id: "10",
    date: "2024-08-02T15:00:00Z",
    description: "Ingressos para show",
    amount: 250,
    type: "expense",
    category: "Lazer",
  },
];

export const purchases: Purchase[] = [
  {
    id: "1",
    date: "2024-07-28T14:45:12Z",
    total: 7850,
    items: [
      { productId: 1, quantity: 1, name: "Notebook Gamer Pro", price: 7500 },
      {
        productId: 2,
        quantity: 1,
        name: "Mouse Sem Fio Ultra-leve",
        price: 350,
      },
    ],
  },
  {
    id: "2",
    date: "2024-07-25T10:20:30Z",
    total: 3100,
    items: [
      { productId: 4, quantity: 1, name: 'Monitor 4K 27"', price: 2500 },
      { productId: 5, quantity: 1, name: "Headset 7.1 Surround", price: 600 },
    ],
  },
  {
    id: "3",
    date: "2024-07-22T18:05:00Z",
    total: 1350,
    items: [
      { productId: 3, quantity: 1, name: "Teclado Mecânico RGB", price: 550 },
      { productId: 7, quantity: 1, name: "SSD NVMe 1TB", price: 800 },
    ],
  },
];

export const products: Product[] = [
  { id: 1, name: "Notebook Gamer Pro", price: 7500 },
  { id: 2, name: "Mouse Sem Fio Ultra-leve", price: 350 },
  { id: 3, name: "Teclado Mecânico RGB", price: 550 },
  { id: 4, name: 'Monitor 4K 27"', price: 2500 },
  { id: 5, name: "Headset 7.1 Surround", price: 600 },
  { id: 6, name: "Webcam Full HD", price: 400 },
  { id: 7, name: "SSD NVMe 1TB", price: 800 },
];
