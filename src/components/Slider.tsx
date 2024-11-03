import * as React from "react";

import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface slidersProps {
  src: StaticImageData;
  alt: string;
}

export function CarouselSize({ src, alt }: slidersProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 relative">
            <div className="p-0">
              <Card>
                <CardContent className="flex items-center rounded-lg overflow-hidden justify-center p-0  ">
                  <Image src={src} alt={alt}></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-1 bg-transparent/40 hover:bg-transparent/40 h-[35px] w-[35px] transition-opacity duration-300 hover:opacity-100 lg:opacity-0" />
      <CarouselNext className="absolute -right-1 bg-transparent/40 hover:bg-transparent/40 h-[35px] w-[35px] transition-opacity duration-300 hover:opacity-100 lg:opacity-0" />
    </Carousel>
  );
}
