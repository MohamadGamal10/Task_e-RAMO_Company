import { Menu as MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="2xl:hidden cursor-pointer">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>

          <SheetClose asChild>
            <Link className="font-[800] text-center mt-3" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="text-[#717A76] text-center mt-3" href="/about">
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="text-[#717A76] text-center mt-3" href="/work">
              How It Works
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="text-[#717A76] text-center mt-3" href="/contact">
              Contact Us
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className="text-[#717A76] text-center mt-3"
              href="/membership"
            >
              Membership
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Menu as="div" className="relative mt-4  inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  ">
                  العربية
                  <Image
                    src="/Saudi.svg"
                    alt="Vercel Logo"
                    width={20}
                    height={20}
                  />
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      English
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </SheetClose>
          <SheetClose asChild className="mx-auto mt-4">
            <button className="bg-[#365327]  cursor-pointer  text-[#F9F8F6] w-[146.88px] py-[14px] rounded-[8px]">
              Create Account
            </button>
          </SheetClose>
          <SheetClose asChild className="mx-auto mt-4">
            <button className="bg-white flex items-center justify-center text-[#365327] cursor-pointer border-1 border-[#365327] w-[146.88px] py-[14px] rounded-[8px]">
              <Image
                src="/user.svg"
                alt="Vercel Logo"
                className="mr-1"
                width={20}
                height={20}
              />{" "}
              Login
            </button>
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
