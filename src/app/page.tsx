import HomeVideo from "@/components/HomeVideo";
import { CarouselSize } from "@/components/Slider";
import bg from "@/app/assets/CHORKI FLICK/thumbnails_a0b5e7f8521da06d3714f5b59c329570_goplay_scooty_poster_landscape_horizontal_with_mnemonic_1200x675.webp";
import poster from "@/app/assets/kasPurush.webp";
import { CarouselAuto } from "@/components/EmblaCarousel";

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
