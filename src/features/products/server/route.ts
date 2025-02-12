import { Hono } from "hono";
import { ProductsService } from "../service/products.service";
import { API_CONFIG } from "@/config/api.config";
import { Product } from "../type";

const app = new Hono()
  .get("/", async (c) => {
    const page = parseInt(c.req.query("page") ?? "1", 10);
    const productService = new ProductsService(API_CONFIG.BASE_URL);
    const products = await productService.getAllProducts({
      page: page,
      limit: API_CONFIG.LIMIT,
    });

    return c.json({ success: true, data: products ?? [] });
  })
  .get("/:id", async (c) => {
    const current_user = parseInt(c.req.query("user") ?? "1", 10);
    const { id } = c.req.param();
    const productService = new ProductsService(
      API_CONFIG.BASE_URL,
      current_user,
    );
    const product = await productService.getProduct(id);
    return c.json({
      data: product ?? ({} as Product),
    });
  });

export default app;
