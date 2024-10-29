import HomeVideo from "@/components/HomeVideo";
import { CarouselSize } from "@/components/Slider";
export default function Home() {
  return (
    <div className="p-5 lg:p-0 ">
      <HomeVideo />
      <h1 className="uppercase  text-lg  inline-block font-semibold">
        New release
      </h1>
      <div className="">
        <CarouselSize />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        perferendis cum minima totam nam doloribus vero odit asperiores labore
        praesentium minus quas eligendi reprehenderit laboriosam. Beatae
        suscipit aliquam ut.
      </div>
    </div>
  );
}
