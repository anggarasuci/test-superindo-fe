export interface TransactionEntity {
  id: string;
  productCategoryId: string;
  productCategoryName: string?;
  name: string;
  amount: number;
  total: number;
}
