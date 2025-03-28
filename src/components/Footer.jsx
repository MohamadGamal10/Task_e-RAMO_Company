import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F3F5F6] pt-[28px] pb-[33px]">
      <div className="bg-[#B49D97] h-[0.5px] container"></div>
     <div className="container">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-[48px] ">
        <div className="mt-[32px]">
          <Image src="/Logo-png 1.svg" width={126} height={110} alt="logo" />
          <div className="ml-6">
            <div className="flex gap-2 m-2">
              <Image src="/facebook.png" width={24} height={24} alt="logo" />
              <Image src="/youtube.png" width={24} height={24} alt="logo" />
            </div>
            <div className="flex gap-2 m-2">
              <Image src="/linkedin.png" width={24} height={24} alt="logo" />
              <Image src="/twitter-alt.png" width={24} height={24} alt="logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  mt-[58px]">
          <h1 className="font-bold text-xl text-[#365327]">Main Pages</h1>
          <div className="space-y-[32px] mt-[24px]">
            <Link className="flex items-center gap-2" href="/">
              <Image src="/Ellipse 10.png" width={5} height={5} alt="" /> Home
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/Ellipse 10.png" width={5} height={5} alt="" /> About
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/Ellipse 10.png" width={5} height={5} alt="" /> How It
              Works
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/Ellipse 10.png" width={5} height={5} alt="" />{" "}
              Contact Us
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/Ellipse 10.png" width={5} height={5} alt="" />{" "}
              Membership
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[58px]">
          <h1 className="font-bold text-xl text-[#365327]">Products</h1>
          <div className="space-y-[32px] mt-[24px]">
            <Link className="flex items-center gap-2" href="/">
              <Image src="/shared.svg" width={16} height={16} alt="" /> Shared
              Space
            </Link>
            <Link className="flex items-center gap-2" href="/">
            <Image src="/workplace.svg" width={16} height={16} alt="" />
              Private Offices
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/conference.svg" width={16} height={16} alt="" />{" "}
              Meeting Rooms
            </Link>
            <Link className="flex items-center gap-2" href="/">
              <Image src="/video-call.svg" width={16} height={16} alt="" />{" "}
              Virtual Offices
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-[58px]">
          <h1 className="font-bold text-xl text-[#365327]">
            Download the <br />
            Chair Location App
          </h1>
          <div className="space-y-3 mt-3">
            <Image src="/google.svg" width={168} height={50} alt="" />
            <Image src="/app.svg" width={168} height={50} alt="" />
          </div>
        </div>
      </div>
     </div>
      <div className="bg-[#B49D97] h-[0.5px] container"></div>
      <div className="container">
      <div className="flex flex-col text-center gap-2 md:flex-row md:gap-0 md:text-start items-center mt-[23px] md:justify-between">
        <div className="flex gap-[32px]">
        <Link href="/" className="underline font-[400] text-[#717A76] text-[16px]">Privacy & Policy</Link>
        <Link href="/" className="underline font-[400] text-[#717A76] text-[16px]">Terms & Conditions</Link>
        </div>
        <p className="font-[400] text-[#717A76] text-[16px]">All Copyrights Chair Location | Developed by <span className="font-[700]">e-RAMO For Digital Solutions</span></p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
