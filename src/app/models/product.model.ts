export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock_quantity : number;
  imageUrl?: string;  // le '?' signifie que cette propriété est optionnelle
}

