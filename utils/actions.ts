import db from "@/utils/db";
import { redirect } from "next/navigation";

export const getFeaturedProducts = async () => {
  const products = await db.product.findMany({ where: { featured: true } });

  return products;
};

export const getAllProducts = async ({ search = "" }: { search: string }) => {
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } }
      ]
    },
    orderBy: { createdAt: "desc" }
  });

  return products;
};

export const getSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({ where: { id: productId } });

  if (!product) return redirect("/products");

  return product;
};
