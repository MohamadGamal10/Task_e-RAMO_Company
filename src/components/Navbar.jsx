import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="container mt-[20px] mb-[27px]">
      <div className="flex py-4 items-center">
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          width={67}
          height={59}
          className="w-[67px] h-[59px]"
          priority
        />
        <div className="items-center header-nav hidden xl:flex">
          <nav className="ml-[82px]  xl:w-[678px] space-x-[48px]">
            <Link className="font-[800] " href="/">
              Home
            </Link>
            <Link className="text-[#717A76]" href="/about">
              About
            </Link>
            <Link className="text-[#717A76]" href="/products">
              Products
            </Link>
            <Link className="text-[#717A76]" href="/work">
              How It Works
            </Link>
            <Link className="text-[#717A76]" href="/contact">
              Contact Us
            </Link>
            <Link className="text-[#717A76]" href="/membership">
              Membership
            </Link>
          </nav>
          <div className="flex items-center xl:ml-[63px] ">
            <Menu as="div" className="relative   inline-block text-left">
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
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
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

            <button className="bg-[#365327] cursor-pointer ml-[6px] mr-[12.24px] text-[#F9F8F6] w-[146.88px] py-[14px] rounded-[8px]">
              Create Account
            </button>
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
          </div>
        </div>

        <div className="ms-auto">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
