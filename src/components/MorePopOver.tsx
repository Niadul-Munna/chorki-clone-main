import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PiDotsNineBold } from "react-icons/pi";
import { LuLifeBuoy } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
import { TbAB2 } from "react-icons/tb";
import { PiAndroidLogoFill } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiAmazonfiretv } from "react-icons/si";

export function MorePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <PiDotsNineBold className="size-7 cursor-pointer" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80  bg-slate-700 rounded-xl space-y-3">
        <div className="flex text-sm gap-3 items-center justify-center text-center  text-white">
          <div className="w-20 h-20 items-center justify-center flex flex-col bg-gray-500 rounded-lg ">
            <TbCirclePercentage className="size-5" />
            Redeem Code
          </div>
          <div className="w-20 h-20 items-center justify-center flex flex-col bg-gray-500 rounded-lg">
            <TbAB2 className="size-5" /> Switch Language
          </div>
          <div className="w-20 h-20 items-center justify-center flex flex-col bg-gray-500 rounded-lg">
            <LuLifeBuoy className="size-5" />
            Help & Support
          </div>
        </div>
        <div className="bg-gray-600  w-full h-28 px-3 rounded-bl-lg rounded-br-lg ">
          <div className="border-b border-gray-400 py-3">
            <h2 className="uppercase text-xs font-semibold  text-zinc-300">
              Available on
            </h2>
            <div className="text-2xl gap-4 text-gray-300 flex  items-center">
              <PiAndroidLogoFill />
              <FaApple />
              <SiSamsung />
              <SiAmazonfiretv />
            </div>
          </div>
          <div className=" text-gray-300 text-[9px]">
            <ul className="flex space-x-5 font-light py-3">
              <li className="uppercase">faq</li>
              <li className="list-disc uppercase">Terms of Use</li>
              <li className="list-disc uppercase">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
