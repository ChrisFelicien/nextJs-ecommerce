import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";

import Image1 from "@/public/images/img-1.jpg";
import Image2 from "@/public/images/img-2.jpg";
import Image3 from "@/public/images/img-3.jpg";
import Image4 from "@/public/images/img-4.jpg";

const carrouselImages = [Image1, Image2, Image3, Image4];

const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carrouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <Image
                    src={image}
                    alt='image'
                    className='rounded-lg overflow-hidden w-full h-[24rem] object-cover'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
