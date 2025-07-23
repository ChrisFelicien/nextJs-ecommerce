import db from "@/utils/db";

export const getFeaturedProducts = async () => {
  const products = await db.product.findMany({ where: { featured: true } });

  return products;
};

export const getAllProducts = async () => {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" }
  });

  return products;
};
