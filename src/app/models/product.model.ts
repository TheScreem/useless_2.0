export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock : number;
  imageUrl?: string;  // le '?' signifie que cette propriété est optionnelle
  // Ajoutez d'autres propriétés selon la structure de votre table Produit
}
