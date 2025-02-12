import { Product } from "@/features/products/type";

export const saveForLater = (product: Product) => {
  // Get existing saved products from localStorage
  const savedProducts = JSON.parse(
    localStorage.getItem("savedProducts") || "[]",
  );

  // Check if the product is already saved to avoid duplicates
  if (!savedProducts.some((p: Product) => p.id === product.id)) {
    savedProducts.push(product);
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }
};
