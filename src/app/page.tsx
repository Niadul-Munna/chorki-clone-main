import HomeVideo from "@/components/HomeVideo";
import { CarouselSize } from "@/components/Slider";
import bg from "@/app/assets/CHORKI FLICK/thumbnails_Scooty.webp";
import poster from "@/app/assets/kasPurush.webp";
import { CarouselAuto } from "@/components/EmblaCarousel";
// import { Data } from "./data/autoSlider";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0 overflow-x-hidden">
      <HomeVideo />
      <CarouselAuto src={poster} alt="bg" />
      <div className="space-y-16">
        <div className="">
          <h1 className="uppercase  text-lg  inline-block font-semibold">
            New release
          </h1>
          <CarouselSize src={bg} alt="bg" />
        </div>
        <div className="">
          <h1 className="uppercase  text-lg  inline-block font-semibold">
            FULL-ON FILMY
          </h1>
          <div className="">
            <CarouselSize src={bg} alt="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
