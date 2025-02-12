export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  products: T[];
  total: number;
  page: number;
  totalPages: number;
}
