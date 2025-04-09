import { JSX } from "react";
import {
  FilterableProductTableProps,
  ProductCategoryRowProps,
  ProductRowProps,
  ProductTableProps,
} from "./shared";

function ProductRow({ product: { name, price, stocked } }: ProductRowProps) {
  return (
    <tr>
      <td
        className="product-row-name"
        style={{ color: stocked ? "inherit" : "red" }}
      >
        {name}
      </td>
      <td className="product-row-price">{price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductTable({ products }: ProductTableProps) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

export function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
