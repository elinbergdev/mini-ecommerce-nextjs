import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { PRODUCTS } from "../constants";
import { Product } from "../type";

type useGetProductsProps = {
  page: number;
};

export const useGetProducts = ({ page = 1 }: useGetProductsProps) => {
  const query = useQuery({
    queryKey: [PRODUCTS.GET, { page }],
    queryFn: async () => {
      const response = await client.api["products"].$get({
        query: {
          page,
        },
      });
      if (!response.ok) {
        return null;
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};

interface useGetProductProps {
  id: string;
}

export const useGetProduct = ({ id }: useGetProductProps) => {
  const query = useQuery({
    queryKey: [PRODUCTS.GET_ONE],
    queryFn: async () => {
      const response = await client.api["products"][":id"].$get({
        param: {
          id,
        },
      });
      if (!response.ok) {
        return {} as Product;
      }
      const { data } = await response.json();
      return data;
    },
  });
  return query;
};
