export interface Product {
  name: string;
  price: string;
  stocked: boolean;
  category: string;
}
export interface ProductRowProps {
  product: Product;
}
export interface ProductCategoryRowProps {
  category: string;
}
export interface ProductTableProps {
  products: Product[];
}
export interface FilterableProductTableProps {
  products: Product[];
}
