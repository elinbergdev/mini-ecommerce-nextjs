import { ProductDetailsComponent } from "@/features/products/components/product-details.component";
import { ComponentProps, FC } from "react";

export interface IB_MODAL_COMPONENTS {
  "product-details-component": ComponentProps<typeof ProductDetailsComponent>;
}

export type MODAL_COMPONENTS_NAMES = keyof IB_MODAL_COMPONENTS;

export const MODAL_COMPONENTS: {
  [K in MODAL_COMPONENTS_NAMES]: FC<IB_MODAL_COMPONENTS[K]>;
} = {
  "product-details-component": ProductDetailsComponent,
} as const;

export function isValidModalName(name: string): name is MODAL_COMPONENTS_NAMES {
  return name in MODAL_COMPONENTS;
}
