import ProductContainer from "@/components/products/ProductContainer";

type LayoutType = "grid" | "list";

type ProductsPageProps = {
  searchParams: { layout?: LayoutType; search?: string };
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductContainer layout={layout} search={search} />;
};

export default ProductsPage;
