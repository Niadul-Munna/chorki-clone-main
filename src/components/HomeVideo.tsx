import Image from "next/image";
import React from "react";
import Toofan from "@/app/heading_Toofan.png";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import { FiInfo, FiPlus } from "react-icons/fi";

const HomeVideo = () => {
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start  items-center">
      <video
        poster="https://firebasestorage.googleapis.com/v0/b/chorki-clone.appspot.com/o/thumbnails_Toofan.webp?alt=media&token=7ddb54b8-0689-4888-b518-32fc8a227d45"
        autoPlay
        muted
        loop
        src="https://firebasestorage.googleapis.com/v0/b/chorki-clone.appspot.com/o/Toofan.mp4?alt=media&token=5ae39460-617e-4ddc-a776-6ec70f6ddcf9"
        className="w-full absolute -top-5 left-0 h-screen  object-cover  -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[385px] mx-auto  space-y-5">
        <Image src={Toofan} alt="tofan" className="w-[256px]"></Image>

        <ul className="flex p-3 gap-6">
          Action
          <li className="list-disc  bg-white/30 ">16+</li>
          <li className="list-disc">2024</li>
          <li className="list-disc">2h 24m</li>
        </ul>
        <div className="flex items-center gap-2">
          <Button className="bg-rose-600 text-white w-[183px] h-[48px] text-xl font-bold">
            <FaPlay />
            Watch Now
          </Button>
          <Button className="w-[48px] h-[48px] bg-white/40 text-white">
            <FiPlus className="font-normal" />
          </Button>
          <Button className="w-[48px] h-[48px] bg-white/40 text-white">
            <FiInfo />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
