import Hero from "@/components/navbar/Hero";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";

const page = async () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProduct />
      </Suspense>
    </>
  );
};

export default page;
