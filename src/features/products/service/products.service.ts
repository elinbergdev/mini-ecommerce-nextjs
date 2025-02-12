import { BaseApiService } from "@/service/base.service";
import { PaginatedResponse, PaginationParams, Product } from "../type";

export class ProductsService extends BaseApiService {
  constructor(baseURL: string, userId?: number) {
    super(baseURL, userId);
  }

  async getAllProducts({
    page,
    limit,
  }: PaginationParams): Promise<PaginatedResponse<Product>> {
    try {
      const { data } = await this.api.get<PaginatedResponse<Product>>(
        "/products",
        {
          params: {
            page,
            limit,
          },
        },
      );
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getFeaturedProducts({
    page,
    limit,
  }: PaginationParams): Promise<PaginatedResponse<Product>> {
    try {
      const { data } = await this.api.get<PaginatedResponse<Product>>(
        "/products/featured",
        {
          params: {
            page,
            limit,
          },
        },
      );
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getProduct(productId: string): Promise<Product> {
    try {
      const { data } = await this.api.get<Product>(`/products/${productId}`);
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}
