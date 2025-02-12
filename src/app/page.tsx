import { API_CONFIG } from "@/config/api.config";
import ProductCard from "@/features/products/components/product.card";
import { ProductsService } from "@/features/products/service/products.service";

const getFeaturedProducts = () => {
  const productService = new ProductsService(API_CONFIG.BASE_URL);
  return productService.getFeaturedProducts({ page: 1, limit: 20 });
};

export default async function Home() {
  const data = await getFeaturedProducts();
  return (
    <div className="space-y-4 p-10">
      <h3 className="font-bold text-3xl">Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data &&
          data.products.length > 0 &&
          data.products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
}
