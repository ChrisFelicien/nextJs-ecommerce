"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
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

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();

  if (!user) return redirect("/");

  try {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price") as string);
    const company = formData.get("company") as string;
    const image = formData.get("image") as File;
    const featured = Boolean(formData.get("featured") as string);
    const description = formData.get("description") as string;

    await db.product.create({
      data: {
        name,
        price,
        company,
        image: "/images/image-1.jpg",
        description,
        featured,
        clerkId: user.id
      }
    });

    return { message: "Product created" };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "There was an error";
    return { message };
  }
};
