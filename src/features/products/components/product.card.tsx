"use client";

import Image from "next/image";

import Currency from "@/components/currency";
import { Product } from "../type";
import { useModalStore } from "@/components/modal/modal-store";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const { open } = useModalStore();
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={() =>
        open({ component: "product-details-component", props: data })
      }
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.imageUrl}
          alt=""
          className="aspect-square object-cover rounded-md"
          fill
        />
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
