"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../type";
import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { saveForLater } from "@/lib/saveForLater";

export const ProductDetailsComponent = (data: Product) => {
  return (
    <Card className="w-full h-full border-none shadow-none bg-white">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">
          Create a new Workspace
        </CardTitle>
      </CardHeader>
      <div className="px-7"></div>
      <CardContent>
        <div className="bg-white">
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <div>
                  <div className="aspect-square rounded-xl bg-gray-100 relative mb-2">
                    <Image
                      src={data.imageUrl}
                      alt=""
                      className="aspect-square object-cover rounded-md"
                      fill
                    />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {data.name}
                  </h1>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl text-gray-900">
                      <Currency value={data?.price} />
                    </p>
                  </div>
                  <hr className="my-4" />
                  <Button
                    variant={"secondary"}
                    className="flex items-center"
                    onClick={() => saveForLater(data)}
                  >
                    Save for Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
