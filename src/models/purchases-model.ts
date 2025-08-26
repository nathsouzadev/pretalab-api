export interface IPurchaseItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
}

export interface IPurchases{
  id?: string;
  date: Date;
  total: number;
  items: IPurchaseItem[];
}