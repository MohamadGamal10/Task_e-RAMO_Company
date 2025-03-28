import SwitchComponent from "@/components/Switch";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="relative rounded-[20px]  max-w-[1312px] h-[668px]">
          <Image
            src="/office.jpeg"
            alt="Vercel Logo"
            className="object-cover w-full h-full rounded-[20px]"
            width={600}
            height={600}
          />
          <div className="absolute rounded-[20px] bg-gradient-to-b from-[#3F3533] to-[#4C3F3B00]  w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-[#F8E9D9] max-w-[802px] max-h-[188px] text-[25px] md:text-[52px] font-[800] text-center absolute top-[105px] letter-spacing-[2%] left-1/2 transform -translate-x-1/2  ">
              Office That Fit You
              <div>Creative Way To Work</div>
            </div>
          </div>
          <div className="absolute rounded-[20px] w-full h-full top-[287px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#FFFFFF] rounded-4xl max-w-[1079px]  w-full absolute -bottom-25  left-1/2 transform -translate-x-1/2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/co-working.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Shared Space
                </button>
                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/workplace.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Private Offices
                </button>
                <button className="bg-[#FAFFF7] cursor-pointer flex items-center justify-center rounded-[8px] border-b-[0.5px] border-black py-3 px-7">
                  <Image
                    src="/conference.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Meeting Rooms
                </button>
                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/video-call.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Virtual Offices
                </button>
              </div>

              <div className="flex bg-[#FFFAF5] w-full rounded-b-4xl mx-auto justify-center p-8">
                <label
                  htmlFor="search"
                  className="relative flex-grow max-w-3xl"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#717A76]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </span>
                  <span className="absolute hidden md:flex inset-y-0 right-0  items-center pr-3">
                    <Image
                      src="/fi_17065265.svg"
                      width={14}
                      height={14}
                      className="mr-[4px]"
                      alt=""
                    />
                    <p className="text-[#1A2921] underline text-[14px]">
                      Search Nearby
                    </p>
                  </span>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search Here..."
                    className="w-full pl-10 text-[#717A76] pr-4 py-3 rounded-lg border-0 
                  bg-white
                placeholder:text-[#717A76]  
                transition-all duration-200 shadow-sm"
                  />
                </label>
                <button
                  className="bg-[#365327] hover:bg-[#2a401f] ml-4 px-8 
              text-white rounded-lg transition-colors 
              duration-200 flex items-center justify-center cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[120px]">
          <div className="">
            <div className="font-[700] text-[32px]">About Chair Location</div>
            <p className="text-[#717A76] pt-[10px]">
              “Chair location” is a website where you can search, find and
              reserve co-working space, including co-working offices, private
              offices, meeting rooms, and virtual offices near you. It shows the
              features and amenities this space can provide. Professionals and
              businesses can then compare all available co-working spaces to
              find one with the services and facilities that best suit their
              requirements.
            </p>
            <div className="mt-[30px] space-y-[25px]">
              <h3 className=" text-2xl font-[600]">Why Chair Location</h3>

              <div className="flex items-center gap-2">
                <Image
                  src="/Group1.png"
                  width={40}
                  height={40}
                  alt="location"
                />{" "}
                Than (4652) Location
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Group2.png"
                  width={40}
                  height={40}
                  alt="location"
                />{" "}
                We Offer All Amenities in Our All Location
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Group3.png"
                  width={40}
                  height={40}
                  alt="location"
                />{" "}
                All Kinda Of Supports 24/7
              </div>
            </div>
            <div className="mt-10 space-y-3">
              <button className="bg-[#365327] cursor-pointer mr-5  text-white w-full md:w-[190px] h-[56px] rounded-lg">
                View Products
              </button>
              <button className="bg-white text-black cursor-pointer  border w-full md:w-[190px] h-[56px] rounded-lg">
                Book Now
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <Image
              src="/group-men-business-attire-sit-around-table-with-laptops.png"
              alt="Vercel Logo"
              className="w-full h-[170px]  rounded-lg"
              width={640}
              height={95}
            />
            <Image
              src="/modern-business-office-interior-3d-rendering.jpg"
              alt="Vercel Logo"
              className="w-full h-[170px]  rounded-lg"
              width={640}
              height={95}
            />
            <Image
              src="/rear-view-woman-using-laptop-office.png"
              alt="Vercel Logo"
              className="w-full h-[170px]  rounded-lg"
              width={640}
              height={95}
            />
          </div>
        </div>

        <div className="mt-[43px]">
          <h1 className="text-[56px] font-[700] text-center">
            Latest Listings
          </h1>
          <p className="text-[#1A2921] font-[400]  text-[24px] text-center">
            Check our latest listings
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            <div>
              <a
                href="#"
                className="block rounded-2xl p-4 shadow-xs border-[#EFF0F6] border-2 shadow-gray-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/spot.jpg"
                    alt="Vercel Logo"
                    className="w-full h-[203px] object-cover  rounded-lg"
                    width={280}
                    height={203}
                  />

                  <div className="absolute px-25  top-[100px] -left-[80px] bg-[#A7BC9D] text-white p-2 z-20 transform -rotate-35 origin-top-left">
                    <h1 className="text-[12px] ml-4 font-[400] text-[#000000]">
                      Available
                    </h1>
                  </div>

                  <div className="absolute top-[12px] right-[12px] ">
                    <div className="flex items-center space-x-[16px]">
                      <Image
                        src="/GroupShare.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                      <Image
                        src="/GroupHeart.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <div className="flex justify-between items-center mb-2">
                        <dd className="text-sm rounded-md bg-[#F4F1ED] w-fit p-1">
                          Shared Area
                        </dd>
                        <dd className="text-sm flex items-center gap-2 p-1">
                          <Image
                            src="/star.svg"
                            width={12}
                            height={12}
                            alt="star"
                          />
                          4.9 (162 Review)
                        </dd>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <dt className="sr-only">Address</dt>
                      <dd className="font-[600] text-xl">
                        Spot Co-Working Space
                      </dd>
                      <p className="text-[#717A76] text-sm">
                        Chair location is a website where you can search, find
                        and reserve co-working space, including co-working
                      </p>
                      <div className="flex flex-col border-b-1 border-[#94A3B8] p-2 text-sm text-[#64748B]">
                        <div className="flex gap-1">
                          <Image
                            src="/per.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          12 Per
                        </div>
                        <div className="flex gap-1">
                          <Image
                            src="/open.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          Open
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#717A76] text-sm">
                          Starts From : <strong>20</strong>SAR /HOUR{" "}
                        </p>
                        <Image
                          src="/arrowr.png"
                          width={32}
                          height={32}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </dl>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-2xl p-4 shadow-xs border-[#EFF0F6] border-2 shadow-gray-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/spot.jpg"
                    alt="Vercel Logo"
                    className="w-full h-[203px] object-cover  rounded-lg"
                    width={280}
                    height={203}
                  />

                  <div className="absolute px-25  top-[100px] -left-[80px] bg-[#AE5B5B] text-white p-2 z-20 transform -rotate-35 origin-top-left">
                    <h1 className="text-[12px] ml-3 font-[400] ">
                      Not Available
                    </h1>
                  </div>
                  <div className="absolute top-[12px] right-[12px] ">
                    <div className="flex items-center space-x-[16px]">
                      <Image
                        src="/GroupShare.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                      <Image
                        src="/GroupNOHeart.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <div className="flex justify-between items-center mb-2">
                        <dd className="text-sm rounded-md bg-[#F4F1ED] w-fit p-1">
                          Meeting Room
                        </dd>
                        <dd className="text-sm flex items-center gap-2 p-1">
                          <Image
                            src="/star.svg"
                            width={12}
                            height={12}
                            alt="star"
                          />
                          4.9 (162 Review)
                        </dd>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <dt className="sr-only">Address</dt>
                      <dd className="font-[600] text-xl">
                        Spot Co-Working Space
                      </dd>
                      <p className="text-[#717A76] text-sm">
                        Chair location is a website where you can search, find
                        and reserve co-working space, including co-working
                      </p>
                      <div className="flex flex-col border-b-1 border-[#94A3B8] p-2 text-sm text-[#64748B]">
                        <div className="flex gap-1">
                          <Image
                            src="/per.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          12 Per
                        </div>
                        <div className="flex gap-1 text-[#E17B7B]">
                          <Image
                            src="/closed.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          Closed
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#717A76] text-sm">
                          Starts From : <strong>20</strong>SAR /HOUR{" "}
                        </p>
                        <Image
                          src="/arrowr.png"
                          width={32}
                          height={32}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </dl>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-2xl p-4 shadow-xs border-[#EFF0F6] border-2 shadow-gray-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/spot.jpg"
                    alt="Vercel Logo"
                    className="w-full h-[203px] object-cover  rounded-lg"
                    width={280}
                    height={203}
                  />

                  <div className="absolute px-25  top-[100px] -left-[80px] bg-[#A7BC9D] text-white p-2 z-20 transform -rotate-35 origin-top-left">
                    <h1 className="text-[12px] ml-4 font-[400] text-[#000000]">
                      Available
                    </h1>
                  </div>
                  <div className="absolute top-[12px] right-[12px] ">
                    <div className="flex items-center space-x-[16px]">
                      <Image
                        src="/GroupShare.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                      <Image
                        src="/GroupHeart.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <div className="flex justify-between items-center mb-2">
                        <dd className="text-sm rounded-md bg-[#F4F1ED] w-fit p-1">
                          Private Office
                        </dd>
                        <dd className="text-sm flex items-center gap-2 p-1">
                          <Image
                            src="/star.svg"
                            width={12}
                            height={12}
                            alt="star"
                          />
                          4.9 (162 Review)
                        </dd>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <dt className="sr-only">Address</dt>
                      <dd className="font-[600] text-xl">
                        Spot Co-Working Space
                      </dd>
                      <p className="text-[#717A76] text-sm">
                        Chair location is a website where you can search, find
                        and reserve co-working space, including co-working
                      </p>
                      <div className="flex flex-col border-b-1 border-[#94A3B8] p-2 text-sm text-[#64748B]">
                        <div className="flex gap-1">
                          <Image
                            src="/per.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          12 Per
                        </div>
                        <div className="flex gap-1 text-[#E17B7B]">
                          <Image
                            src="/closed.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          Closed
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#717A76] text-sm">
                          Starts From : <strong>20</strong>SAR /HOUR{" "}
                        </p>
                        <Image
                          src="/arrowr.png"
                          width={32}
                          height={32}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </dl>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block rounded-2xl p-4 shadow-xs border-[#EFF0F6] border-2 shadow-gray-100"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/spot.jpg"
                    alt="Vercel Logo"
                    className="w-full h-[203px] object-cover  rounded-lg"
                    width={280}
                    height={203}
                  />

                  <div className="absolute px-25  top-[100px] -left-[80px] bg-[#A7BC9D] text-white p-2 z-20 transform -rotate-35 origin-top-left">
                    <h1 className="text-[12px] ml-4 font-[400] text-[#000000]">
                      Available
                    </h1>
                  </div>
                  <div className="absolute top-[12px] right-[12px] ">
                    <div className="flex items-center space-x-[16px]">
                      <Image
                        src="/GroupShare.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                      <Image
                        src="/GroupHeart.svg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Price</dt>

                      <div className="flex justify-between items-center mb-2">
                        <dd className="text-sm rounded-md bg-[#F4F1ED] w-fit p-1">
                          Meeting Room
                        </dd>
                        <dd className="text-sm flex items-center gap-2 p-1">
                          <Image
                            src="/star.svg"
                            width={12}
                            height={12}
                            alt="star"
                          />
                          4.9 (162 Review)
                        </dd>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <dt className="sr-only">Address</dt>
                      <dd className="font-[600] text-xl">
                        Spot Co-Working Space
                      </dd>
                      <p className="text-[#717A76] text-sm">
                        Chair location is a website where you can search, find
                        and reserve co-working space, including co-working
                      </p>
                      <div className="flex flex-col border-b-1 border-[#94A3B8] p-2 text-sm text-[#64748B]">
                        <div className="flex gap-1">
                          <Image
                            src="/per.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          12 Per
                        </div>
                        <div className="flex gap-1 text-[#E17B7B]">
                          <Image
                            src="/closed.svg"
                            width={16}
                            height={16}
                            alt="per"
                          />
                          Closed
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#717A76] text-sm">
                          Starts From : <strong>20</strong>SAR /HOUR{" "}
                        </p>
                        <Image
                          src="/arrowr.png"
                          width={32}
                          height={32}
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </dl>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[54px] ">
          <div className="flex flex-wrap  bg-[#365327]  gap-[16px]  max-w-[748px] p-4 h-auto max:h-[92px] mx-auto rounded-[69.5px] ">
            <button className="bg-white mx-auto cursor-pointer  text-[#365327] justify-center flex items-center px-auto my-auto rounded-full w-[165px] h-[52px]">
              <Image
                src="/shared.svg"
                className="mr-[4px]"
                width={16}
                height={16}
                alt="per"
              />
              Shared Space
            </button>
            <button className="text-white mx-auto cursor-pointer bg-[#7C9A82]/10 justify-center flex items-center px-auto my-auto rounded-full w-[165px] h-[52px]">
              <Image
                src="/private.svg"
                className="mr-[4px]"
                width={16}
                height={16}
                alt="per"
              />
              Private Offices
            </button>
            <button className="text-white mx-auto cursor-pointer bg-[#7C9A82]/10 justify-center flex items-center px-auto my-auto rounded-full w-[165px] h-[52px]">
              <Image
                src="/meeting.svg"
                className="mr-[4px]"
                width={16}
                height={16}
                alt="per"
              />
              Meeting Rooms
            </button>
            <button className="text-white mx-auto cursor-pointer bg-[#7C9A82]/10 justify-center flex items-center my-auto rounded-full w-[165px] h-[52px]">
              <Image
                src="/video-call.svg"
                className="mr-[4px]"
                width={16}
                height={16}
                alt="per"
              />
              Virtual Offices
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-[62px] gap-8">
            <div>
              <div>
                <h1 className="font-[700] text-[62px] text-[#1A2921]">
                  Shared Space
                </h1>
                <span className="font-[500] text-[32px]">(CO Work Space)</span>
                <p className="text-[#1A2921]  mt-[8px]">
                  Rent as many desks as you need in a dynamic, shared office
                  space. <br /> Business Address and storage options included.
                </p>
              </div>
              <div className="space-y-[15px] mt-[24px]">
                <div className="flex items-center gap-4">
                  <Image src="/dot.png" width={12} height={12} alt="dot" />
                  Reserved permanent workspace as long as you need
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/dot.png" width={12} height={12} alt="dot" />
                  Book a desk by the hour or day in anyplace
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/dot.png" width={12} height={12} alt="dot" />A
                  well-prepared place for your service and comfort
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/dot.png" width={12} height={12} alt="dot" />
                  Hot desk as often as you need in any place
                </div>
              </div>
              <div className="flex flex-col mt-[27px]">
                <div className="block h-[0.5px] w-[185px] bg-[#B49D97]"></div>
                <div className="flex items-center py-3  gap-3">
                  <Image src="/price.svg" width={18} height={20} alt="prive" />
                  Price Starting From: <strong>1250 EGP</strong>
                </div>
              </div>
              <div className="mt-[28px] flex items-center">
                <button className="bg-[#365327] cursor-pointer  mr-[12.24px] text-[#F9F8F6] w-[146.88px] py-[14px] rounded-[8px]">
                  Book Now
                </button>
                <button className="bg-white flex items-center justify-center text-[#365327] cursor-pointer border-1 border-[#365327] w-[146.88px] py-[14px] rounded-[8px]">
                  <Image
                    src="/user.svg"
                    alt="Vercel Logo"
                    className="mr-1"
                    width={20}
                    height={20}
                  />
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/space.png"
                width={654}
                height={545}
                className="object-cover"
                alt="space"
              />
            </div>
          </div>

          <div className="mt-[60px]">
            <h1 className="text-[56px] font-[700] text-center">How It Works</h1>
            <p className="text-[#1A2921] mt-2 text-[22px] font-[400] text-center">
              Coworking & Flexible Office Marketplace | Search & <br></br> Book
              Today
            </p>

            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 mt-[32px]">
              <div className="h-[500px] place-items-center w-full  max-w-[342px] rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center">
                  <span className="w-[32px] mr-[12px] h-[32px] bg-[#E7CAAA] rounded-full flex items-center justify-center text-[#365327]">
                    1
                  </span>
                  <h1 className="font-[600] text-[20px] text-[#1A2921]">
                    Book, Reach or Call
                  </h1>
                </div>
                <Image
                  src="/flat-lay-desk-calendar-clock.jpg"
                  width={278}
                  height={276}
                  className="mt-[24px] object-cover"
                  alt=""
                />
                <p className="font-[400] text-[18px] mt-[20px] max-w-[278px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="h-[500px] place-items-center w-full  max-w-[342px] rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center">
                  <span className="w-[32px] mr-[12px] h-[32px] bg-[#E7CAAA] rounded-full flex items-center justify-center text-[#365327]">
                    2
                  </span>
                  <h1 className="font-[600] text-[20px] text-[#1A2921]">
                    View Location Info
                  </h1>
                </div>
                <Image
                  src="/flat-lay-desk-calendar-clock2.jpg"
                  width={278}
                  height={276}
                  className="mt-[24px] object-cover"
                  alt=""
                />
                <p className="font-[400] text-[18px] mt-[20px] max-w-[278px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="h-[500px] place-items-center w-full  max-w-[342px] rounded-[16px] bg-[#FFFFFF]">
                <div className="flex items-center">
                  <span className="w-[32px] mr-[12px] h-[32px] bg-[#E7CAAA] rounded-full flex items-center justify-center text-[#365327]">
                    3
                  </span>
                  <h1 className="font-[600] text-[20px] text-[#1A2921]">
                    Search Locations
                  </h1>
                </div>
                <Image
                  src="/man-with-headphones-watching-videos.jpg"
                  width={278}
                  height={276}
                  className="mt-[24px] object-cover"
                  alt=""
                />
                <p className="font-[400] text-[18px] mt-[20px] max-w-[278px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[53px]">
          <h1 className="text-center text-[32px] font-[700]">
            Hybrid working can work for you
          </h1>
          <p className="font-[400] text-center text-[20px] text-[#717A76] mt-[20px]">
            Hybrid working offers you the freedom to work closer to clients,
            colleagues or home. It's also greener and more cost-effective. With
            over 4,000 locations globally, nobody is better placed than Regus to
            help you make the best of it.
          </p>

          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mt-[32px]">
            <Image
              src="/3d-rendering-business-meeting-working-room-office-building.jpg"
              width={416}
              height={356}
              alt=""
            />
            <Image
              src="/empty-office-with-flowerpots.jpg"
              width={416}
              height={356}
              alt=""
            />
            <Image
              src="/modern-business-office-interior-3d-renderingg.jpg"
              width={416}
              height={356}
              alt=""
            />
          </div>
        </div>

        <div className="mt-[48px] relative grid gap-50 place-items-center grid-cols-1 lg:grid-cols-3 bg-[#FDF8F2] max-w-[1312px] h-[610px] rounded-[32px]">
          <div>
            <Image
              src="/iPhone 12 Pro.png"
              className="absolute bottom-0 z-2 hidden xl:block left-[96px]"
              width={434}
              height={900}
              alt=""
            />
          </div>
          <div className="xl:mt-[243px] text-center  xl:text-start xl:col-span-2">
            <h2 className="font-[700] text-[40px]">
              Explore The Chair Location App
            </h2>
            <p className="font-[400] text-[20px] text-[#717A76] max-w-[650px]">
              Hybrid working offers you the freedom to work closer to clients,
              colleagues or home.
            </p>
            <div className="flex items-center justify-center  xl:justify-start flex-col md:flex-row gap-[20px] mt-[36px]">
              <Image
                src="/google.svg"
                width={212.5683135986328}
                height={62.98320770263672}
                alt=""
              />
              <Image
                src="/app.svg"
                width={212.5683135986328}
                height={62.98320770263672}
                alt=""
              />
            </div>
            <Image
              src="/hand pointing (1) 1.png"
              className="absolute top-[18px] xl:top-[58px] right-0"
              width={212.5683135986328}
              height={62.98320770263672}
              alt=""
            />
          </div>
        </div>

        <div className="mt-[100px]">
          <h1 className="font-[700] text-[18px] text-[#365327] uppercase text-center">
            pricing
          </h1>
          <h1 className="font-[700] text-[50px] text-[#1A2921] mt-[10px] text-center">
            Simple, transparent pricing
          </h1>
          <p className="font-[400] text-[18px] max-w-[666px] mx-auto text-[#6F6C90] mt-[12px] text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
          </p>

          <div className="flex mt-[34px] gap-[16px] justify-center">
            <h3 className="font-[400] text-[18px] text-[#170F49] ">Monthly</h3>
            <SwitchComponent />
            <h3 className="font-[400] text-[18px] text-[#170F49] ">Annually</h3>
          </div>

          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[31px] mt-[32px]">
            <div className="lg:mt-[45px] ">
              <div className="font-[600] text-[20px] max-w-[185px] mb-[25px] text-[#1A2921]">
                Select Form The Upcoming Options.
              </div>
              <div className="flex flex-col gap-[24px]">
                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/co-working.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Shared Space
                </button>
                <button className="bg-[#E7CAAA]/50 text-[#365327] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/conference.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Meeting Rooms
                </button>
                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/workplace.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Private Offices
                </button>

                <button className="bg-[#F7F8F9] cursor-pointer flex items-center justify-center rounded-[8px] py-3 px-7">
                  <Image
                    src="/video-call.svg"
                    className="mr-[8px]"
                    width={24}
                    height={24}
                    alt=""
                  />{" "}
                  Virtual Offices
                </button>
              </div>
              <h3 className="font-[400] text-[18px] max-w-[233px] mt-[60px] text-[#1A2921]">
                Do you face Any Problems ?
              </h3>
              <p className="font-[400] text-[14px] max-w-[258px] mt-[8px] text-[#717A76]">
                Contact us Any time Anyplace we will be Happy.
              </p>
              <div className="flex justify-between mt-[28px]">
                <div className="flex items-center font-[600] text-[14px] text-[#1A2921]">
                  <Image
                    src="/fi_4840332.svg"
                    className="mr-[4px]"
                    width={20}
                    height={20}
                    alt=""
                  />
                  Available 24/7
                </div>
                <Link
                  href="/"
                  className="flex items-center font-[600] underline text-[16px] text-[#365327]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:mt-[45px] w-[305px] h-[609px] shadow-card bg-[#FFFFFF] rounded-[16px] border-1 border-[#EFF0F6]">
              <div className="flex items-center mt-[38px]">
                <div className="p-[17px] bg-[#E2F5D8] mr-[18px] ml-[33px] rounded-[16px]">
                  <Image src="/Group 39527.svg" width={38} height={38} alt="" />
                </div>
                <div>
                  <h3 className="text-[#6F6C90] font-[400] text-[18px]">
                    For individuals
                  </h3>
                  <h1 className="font-[700] text-[24px] text-[#1A2921]">
                    Basic
                  </h1>
                </div>
              </div>
              <p className="font-[400] mx-[33px] text-[14px] max-w-[239px] mt-[18px] text-[#6F6C90]">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>
              <div className="flex items-center mt-[12px] mx-[33px]">
                <h1 className="font-[700] text-[#1A2921]  text-[32px] ">
                  SAR<span className="text-[54px]">99</span>
                </h1>
                <h4 className="font-[400] text-[#6F6C90] mt-5 ml-[10px] text-[20px] ">
                  {" "}
                  /monthly
                </h4>
              </div>
              <h5 className="font-[700] mx-[33px] text-[18px] mt-[14px] text-[#1A2921] ">
                What’s included
              </h5>
              <div className="flex flex-col gap-[22px] mt-[20px] mx-[33px]">
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    10 Hours / Week
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    25 Hours in Shared area / Month
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    Free 1 hour private office
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    Up to 3 team members
                  </p>
                </div>
              </div>
              <button className="bg-[#365327] cursor-pointer mx-[46px] w-[213px] h-[48px] rounded-[96px] text-[#FFFFFF] font-[700] text-[18px] mt-[25px] ">
                Get Started
              </button>
            </div>
            <div className=" w-[305px] h-[654px] shadow-card bg-[#365327] rounded-[16px] border-1 border-[#EFF0F6]">
              <div className="flex items-center justify-center text-white bg-[#FFFFFF33]/20 mt-[19px] w-[246px] h-[40px] rounded-[10px] mx-[33px]">
                <Image
                  src="/Frame 84.svg"
                  width={24}
                  height={24}
                  className="mr-[5px]"
                  alt=""
                />
                Popular Plan (Best Sales)
              </div>
              <div className="flex items-center mt-[18px]">
                <div className="p-[17px] bg-[#E2F5D8] mr-[18px] ml-[33px] rounded-[16px]">
                  <Image src="/Group 39527.svg" width={38} height={38} alt="" />
                </div>
                <div>
                  <h3 className="text-[#D8D2C6] font-[500] text-[18px]">
                    For mid companies
                  </h3>
                  <h1 className="text-[#F9F8F6] font-[700] text-[24px]">
                    Enterprise
                  </h1>
                </div>
              </div>
              <p className="font-[400] mx-[33px] text-[14px] max-w-[239px] mt-[18px] text-[#D8D2C6]">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>
              <div className="flex items-center mt-[12px] mx-[33px]">
                <h1 className="font-[700] text-[#F9F8F6]  text-[32px] ">
                  SAR<span className="text-[54px]">99</span>
                </h1>
                <h4 className="font-[400] text-[#D8D2C6] mt-5 ml-[10px] text-[20px] ">
                  {" "}
                  /monthly
                </h4>
              </div>
              <h5 className="font-[700] mx-[33px] text-[18px] mt-[14px] text-[#F9F8F6] ">
                What’s included
              </h5>
              <div className="flex flex-col gap-[22px] text-[#F9F8F6] mt-[20px] mx-[33px]">
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle2.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] ">
                    10 Hours / Week
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle2.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] ">
                    25 Hours in Shared area / Month
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle2.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px]">
                    Free 1 hour private office
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle2.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] ">
                    Up to 3 team members
                  </p>
                </div>
              </div>
              <button className="bg-[#F9F8F6] cursor-pointer mx-[46px] w-[213px] h-[48px] rounded-[96px] text-[#365327] font-[700] text-[18px] mt-[25px] ">
                Get Started
              </button>
            </div>
            <div className="lg:mt-[45px] w-[305px] h-[609px] shadow-card bg-[#FFFFFF] rounded-[16px] border-1 border-[#EFF0F6]">
              <div className="flex items-center mt-[38px]">
                <div className="p-[17px] bg-[#E2F5D8] mr-[18px] ml-[33px] rounded-[16px]">
                  <Image src="/Group 39527.svg" width={38} height={38} alt="" />
                </div>
                <div>
                  <h3 className="text-[#6F6C90] font-[400] text-[18px]">
                    For individuals
                  </h3>
                  <h1 className="font-[700] text-[24px] text-[#1A2921]">
                    Basic
                  </h1>
                </div>
              </div>
              <p className="font-[400] mx-[33px] text-[14px] max-w-[239px] mt-[18px] text-[#6F6C90]">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.{" "}
              </p>
              <div className="flex items-center mt-[12px] mx-[33px]">
                <h1 className="font-[700] text-[#1A2921]  text-[32px] ">
                  SAR<span className="text-[54px]">99</span>
                </h1>
                <h4 className="font-[400] text-[#6F6C90] mt-5 ml-[10px] text-[20px] ">
                  {" "}
                  /monthly
                </h4>
              </div>
              <h5 className="font-[700] mx-[33px] text-[18px] mt-[14px] text-[#1A2921] ">
                What’s included
              </h5>
              <div className="flex flex-col gap-[22px] mt-[20px] mx-[33px]">
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    10 Hours / Week
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    25 Hours in Shared area / Month
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    Free 1 hour private office
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    className="mr-[8px]"
                    src="/Check Circle.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p className="font-[400] text-[15px] max-w-[242px] text-[#1A2921]">
                    Up to 3 team members
                  </p>
                </div>
              </div>
              <button className="bg-[#365327] cursor-pointer mx-[46px] w-[213px] h-[48px] rounded-[96px] text-[#FFFFFF] font-[700] text-[18px] mt-[25px] ">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[123px]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="font-[600] text-[32px] text-[#172A41] ">
                Our Recent Articles
              </h2>
              <p className="text-[#4E657F] font-[400] text-[16px]">
                Stay Informed with Our Latest Insights
              </p>
            </div>
            <div className="flex items-center mt-[33px]">
              <button className="cursor-pointer">
                <Image
                  src="/_Testiomonial carousel arrow2.svg"
                  width={39.52941131591797}
                  height={39.52941131591797}
                  alt=""
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src="/_Testiomonial carousel arrow.svg"
                  width={39.52941131591797}
                  height={39.52941131591797}
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[32px] mt-[24px]">
            <div className="max-w-[392px] h-[468px]">
              <Image
                className="w-full rounded-[12px]"
                src="/3d-rendering-business-meeting-working-room-office-building (1) 1.jpg"
                width={392}
                height={240}
                alt=""
              />
              <div className="flex mt-[32px] items-center justify-between">
                <h3 className="font-[600] text-[14px] text-[#B0968F]">
                  Mohamed MO
                </h3>
                <h3 className="font-[600] text-[14px] text-[#879AAF]">
                  20 Apr 2024
                </h3>
              </div>
              <h1 className="font-[700] mt-[8px] text-[24px] text-[#101828]">
                Blog Title Here
              </h1>
              <p className="font-[400] mt-[8px] text-[16px] text-[#4E657F]">
                In the realm of modern business operations, a Point of Sale
                (POS) system serves as more than just a too...
              </p>
              <div className="flex mt-[24px] items-center font-[700] text-[16px] text-[#365327]">
                Read More{" "}
                <Image
                  className="ml-8"
                  src="/Icon.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-[392px] h-[468px]">
              <Image
                className="w-full rounded-[12px]"
                src="/empty-office-with-flowerpots (1) 1.jpg"
                width={392}
                height={240}
                alt=""
              />
              <div className="flex mt-[32px] items-center justify-between">
                <h3 className="font-[600] text-[14px] text-[#B0968F]">
                  Mohamed MO
                </h3>
                <h3 className="font-[600] text-[14px] text-[#879AAF]">
                  20 Apr 2024
                </h3>
              </div>
              <h1 className="font-[700] mt-[8px] text-[24px] text-[#101828]">
                Blog Title Here
              </h1>
              <p className="font-[400] mt-[8px] text-[16px] text-[#4E657F]">
                In the realm of modern business operations, a Point of Sale
                (POS) system serves as more than just a too...
              </p>
              <div className="flex mt-[24px] items-center font-[700] text-[16px] text-[#365327]">
                Read More{" "}
                <Image
                  className="ml-8"
                  src="/Icon.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-[392px] h-[468px]">
              <Image
                className="w-full rounded-[12px]"
                src="/interior-modern-open-plan-loft-office-space-with-dark-gray-furniture (1) 1.jpg"
                width={392}
                height={240}
                alt=""
              />
              <div className="flex mt-[32px] items-center justify-between">
                <h3 className="font-[600] text-[14px] text-[#B0968F]">
                  Mohamed MO
                </h3>
                <h3 className="font-[600] text-[14px] text-[#879AAF]">
                  20 Apr 2024
                </h3>
              </div>
              <h1 className="font-[700] mt-[8px] text-[24px] text-[#101828]">
                Blog Title Here
              </h1>
              <p className="font-[400] mt-[8px] text-[16px] text-[#4E657F]">
                In the realm of modern business operations, a Point of Sale
                (POS) system serves as more than just a too...
              </p>
              <div className="flex mt-[24px] items-center font-[700] text-[16px] text-[#365327]">
                Read More{" "}
                <Image
                  className="ml-8"
                  src="/Icon.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[65px]">
          <div className="text-center mb-[74px]">
            <h1 className="font-[700] text-[56px] text-[#1A2921]">
              Contact Us
            </h1>
            <p className="font-[400] text-[24px] text-[#1A2921]">
              We Are Here For Your Help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-[32px]">
            <div className="relative">
              <Image src="/Group 36844.jpg" width={640} height={571} alt="" />
              <Image
                className="absolute mt-15 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                src="/Ellipse 9.png"
                width={130}
                height={130}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-[600] text-[20px] text-[#1A2921]">
                Please fill the upcoming fields
                <span className="text-[#CC4F4F]">*</span>
              </h4>
              <div className="space-y-[18px]">
                <input
                  type="name"
                  placeholder="Full Name..."
                  className="peer mt-0.5 p-5  placeholder:text-[#717A76] w-full max-w-[640px] h-[56px] rounded-[8px] border-gray-300 shadow-sm sm:text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail..."
                  className="peer mt-0.5 p-5 placeholder:text-[#717A76] w-full max-w-[640px] h-[56px] rounded-[8px] border-gray-300 shadow-sm sm:text-sm"
                />
                <input
                  type="phone"
                  placeholder="Phone Number..."
                  className="peer mt-0.5 p-5 placeholder:text-[#717A76] w-full max-w-[640px] h-[56px] rounded-[8px] border-gray-300 shadow-sm sm:text-sm"
                />
                <input
                  type="city"
                  placeholder="City..."
                  className="peer mt-0.5 p-5 placeholder:text-[#717A76] w-full max-w-[640px] h-[56px] rounded-[8px] border-gray-300 shadow-sm sm:text-sm"
                />
                <textarea
                  placeholder="Message Text..."
                  className="mt-0.5 p-4 w-full max-w-[640px] h-[144px] resize-none rounded border-gray-300 shadow-sm sm:text-sm "
                ></textarea>
                <div className="flex justify-center">
                  <button className=" w-[304px] h-[56px] cursor-pointer font-[600] bg-[#365327] rounded-[12px] text-[#F3F5F6]">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url('/Group 36820.jpg')",
          backgroundSize: "cover",
        }}
        className="mt-[71px] w-full h-auto 2xl:h-[738px]"
      >
        <div className="container">
          <div className="grid grid-cols-1 justify-items-center 2xl:justify-items-start 2xl:grid-cols-2">
            <div className=" lg:mt-[246px]  my-15">
              <h2 className="font-[700] text-[48px] max-w-[558px] text-[#F3F5F6]">
                Chair Location Is Trusted By The World's Largest Companies.
              </h2>
              <p className="font-[400] max-w-[458px] text-[18px] text-[#F3F5F6]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="lg:mt-[80px] my-15">
              <div className="flex  flex-wrap gap-[30px] justify-center">
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group11.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group22.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group33.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group44.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group66.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group55.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group77.png" width={143} height={71} alt="" />
                </div>
                <div className="bg-[#FFFFFF1C]/10 border-1 flex items-center justify-center border-[#97A986] rounded-[24px] w-[304px] h-[122px]">
                  <Image src="/Group88.png" width={143} height={71} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative">
        <Image src="/Group 36863.png" className="-z-4 absolute top-0 left-0" width={70} height={70} alt="" />
        <Image src="/Group 36862.png" className="-z-4 absolute top-0 right-0" width={70} height={70} alt="" />
        <div className="justify-center flex mt-[52px] flex-col text-center items-center">
          <h1 className="text-[40px] text-[#1A2921] font-[700]">
            Subscribe To Our Newsletter
          </h1>
          <p className="text-[20px] max-w-[603px] mt-[12px] text-[#717A76] font-[400]">
            Every couple of weeks we send out an update and a few things that
            have inspired us.
          </p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center mt-[30px] mb-[23px]">
            <input
              type="email"
              placeholder="Write Your Mail Here..."
              className="peer mt-0.5 p-5 bg-[#F9F8F6] placeholder:text-[#717A76] mr-[12px] md:w-[459px] h-[62px] rounded-[12px] border-1 border-[#E7CAAA] shadow-sm sm:text-sm"
            />
            <button className="bg-[#365327]  w-[209px] h-[62px] font-[600] text-[20px] text-[#F3F5F6]  rounded-[12px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
