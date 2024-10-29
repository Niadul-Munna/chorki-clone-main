"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function CheckboxWithText() {
  return (
    <div className="flex space-x-2 items-top">
      <Checkbox id="terms1" />
      <div className="grid gap-2 leading-none ">
        <label
          htmlFor="terms1"
          className="flex items-center gap-1 text-[10px]  font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to
          <Link href="/page/privacy" className="text-white underline ">
            Privacy Policy
          </Link>
          and
          <Link href="/page/terms-of-use" className="text-white underline">
            Terms of Use
          </Link>
        </label>
      </div>
    </div>
  );
}
