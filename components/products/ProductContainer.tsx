import { Button } from "../ui/button";
import Link from "next/link";
import { getAllProducts } from "@/utils/actions";
import { Separator } from "@/components/ui/separator";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";

type ProductContainerType = {
  layout: string;
  search: string;
};

const ProductContainer = async ({ layout, search }: ProductContainerType) => {
  const products = await getAllProducts({ search });
  const totalProduct = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {totalProduct} {`Product${totalProduct > 1 ? "s" : ""}`}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              size={"icon"}
              variant={layout === "grid" ? "default" : "outline"}
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              size={"icon"}
              variant={layout === "list" ? "default" : "outline"}
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProduct === 0 ? (
          <h5 className='text-2xl mt-16'>Sorry no product match your search</h5>
        ) : layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
