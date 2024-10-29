import * as React from "react";
// import toofan from "@/app/assets/CHORKI ORIGINAL FILMS/thumbnails_AutoBioGraphy.webp";
import unishBish from "@/app/assets/CHORKI ORIGINAL FILMS/thumbnails_UnishBish.webp";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 relative"
          >
            <div className="p-0">
              <Card>
                <CardContent className="flex items-center justify-center p-0 ">
                  <Image src={unishBish} alt="tofan"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-7 h-[35px] w-[35px]" />
      <CarouselNext className="absolute -right-7 h-[35px] w-[35px]" />
    </Carousel>
  );
}
