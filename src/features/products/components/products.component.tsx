"use client";
import React, { useState } from "react";
import { useGetProducts } from "../api/use-get-products";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import ProductCard from "./product.card";

export const ProductsComponent = () => {
  const [page, setPage] = useState(1);
  const { isFetching, data, isError } = useGetProducts({ page });

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error loading products. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-4 p-10">
      <h3 className="font-bold text-3xl">Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div className="sticky bottom-0 bg-white border-t py-4 mt-8">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-lg">
            Page {page} of {data?.totalPages || 1}
          </span>
          <button
            onClick={() =>
              setPage((p) => Math.min(data?.totalPages || 1, p + 1))
            }
            disabled={page === data?.totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
