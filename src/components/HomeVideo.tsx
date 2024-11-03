import Image from "next/image";
import React from "react";
import Toofan from "@/app/heading_Toofan.png";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import { FiInfo, FiPlus } from "react-icons/fi";
// import { CarouselSize } from "./Slider";

const HomeVideo = () => {
  return (
    <div className="h-[100vh] lg:h-[60vh] flex  lg:justify-start  items-center">
      <video
        poster="https://firebasestorage.googleapis.com/v0/b/chorki-clone.appspot.com/o/thumbnails_Toofan.webp?alt=media&token=7ddb54b8-0689-4888-b518-32fc8a227d45"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/chorki-clone.appspot.com/o/Toofan.mp4?alt=media&token=5ae39460-617e-4ddc-a776-6ec70f6ddcf9"
        className="w-full hidden lg:flex absolute -top-5 left-0 h-screen object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[385px]  translate-y-14 translate-x-1 space-y-7 ">
        <Image
          src={Toofan}
          alt="tofan"
          className="w-[256px] hidden lg:flex"
        ></Image>

        <ul className="lg:flex hidden  font-normal text-white/80 pl-0 gap-6">
          Action
          <li className="list-disc  bg-white/30 inline-block ">16+</li>
          <li className="list-disc">2024</li>
          <li className="list-disc">2h 24m</li>
        </ul>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Button className="bg-rose-600 hover:bg-rose-500 text-white w-[160px] h-[40px]  lg:w-[193px] lg:h-[48px] text-xl font-medium">
            <FaPlay />
            Watch Now
          </Button>
          <Button className="w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] hover:bg-white/50  bg-white/40 text-white">
            <FiPlus className="font-normal" />
          </Button>
          <Button className="w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] hover:bg-white/50 bg-white/40 text-white">
            <FiInfo />
          </Button>
        </div>
        <div className="basis-1/3 hidden lg:flex  ">
          {/* <CarouselSize src={} /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
