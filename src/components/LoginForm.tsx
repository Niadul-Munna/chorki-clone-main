import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { CheckboxWithText } from "./CheckBox";
import Logo from "@/app/assets/Chorki_Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { LuLifeBuoy } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { Input } from "./ui/input";

export function LoginForm() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <div className="flex flex-col h-[36px] items-center  text-xs justify-center ">
            <CiUser className="size-[20px]" />
            <span className="hidden lg:flex">Login</span>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[480px] max-h-[493px] flex flex-col items-center bg-zinc-800  ">
          <Image
            src={Logo}
            width={58}
            height={32}
            alt="site-logo"
            priority
          ></Image>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl text-white">
              Login with mobile number
            </DialogTitle>
            <DialogDescription className="text-gray-400 ">
              Please select your country and enter mobile number
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 w-[400px] ">
            <Input className="bg-zinc-900  border-gray-600   focus-visible:ring-0 focus:border-rose-600" />
          </div>
          <div>
            <CheckboxWithText />
          </div>
          <DialogFooter className="">
            <Button
              className="w-[400px] bg-rose-600 hover:bg-rose-700 font-semibold text-white text-sm"
              type="submit"
            >
              Continue
            </Button>
          </DialogFooter>
          <div className="grid grid-cols-3 items-center">
            <div className="border-b  border-gray-400 w-[147px]"></div>
            <div className="text-xs text-gray-400">Or continue with</div>
            <div className="border-b border-gray-400 w-[147px]"></div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Button className="bg-transparent border text-white border-zinc-700 hover:bg-zinc-700">
              <FcGoogle />
              Google
            </Button>
            <Button className="bg-transparent border text-white border-zinc-700 hover:bg-zinc-700">
              <FaFacebook className="text-blue-500" /> Facebook
            </Button>
            <Button className="bg-transparent border text-white border-zinc-700 hover:bg-zinc-700">
              <MdEmail className="text-blue-500 " />
              Email
            </Button>
          </div>
          <div className="flex justify-end items-center text-xs  w-full p-4 text-gray-400 gap-0.5 ">
            <LuLifeBuoy /> Help
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
