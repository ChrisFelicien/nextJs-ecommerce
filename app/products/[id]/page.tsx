import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { getSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const product = await getSingleProduct(params.id);

  const { name, image, company, description, price } = product;
  const dollarPrice = formatCurrency(price);
  const productId = product.id;

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <div className='relative w-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
            priority
            className='w-full rounded object-cover'
          />
        </div>

        {/* PRODUCT INFO */}
        <div className='space-y-3'>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <FavoriteToggleButton productId={productId} />
          </div>
          <ProductRating productId={productId} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block py-1 px-2   rounded'>
            {dollarPrice}
          </p>
          <p className='text-muted-foreground mt-6 leading-8'>{description}</p>
          <AddToCart productId={productId} />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
