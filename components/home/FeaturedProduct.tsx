import { getFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductGrid from "../products/ProductGrid";

const FeaturedProduct = async () => {
  const products = await getFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductGrid products={products} />
    </section>
  );
};

export default FeaturedProduct;
