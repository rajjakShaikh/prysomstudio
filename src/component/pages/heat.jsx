import React from "react";
import img1 from "../pages/heatImages/1.jpg";
import img2 from "../pages/heatImages/2.jpg";
import img3 from "../pages/heatImages/3.jpg";
import img4 from "../pages/heatImages/4.jpg";
import img5 from "../pages/heatImages/5.png";
import img6 from "../pages/heatImages/6.jpg";
import Header from "../pages/Header";

export default function Heat() {
  return (
    <>
      {/* <Header />

      <div className="flex mx-16 my-16 gap-[120px]">
        <div className="w-[35%] mt-16 fixed top-16 left-16  z-10">
          <div>
            <h1 className="text-[16px] font-semibold mr-[60px] mb-4">H-Eat°</h1>
            <p className="text-[14px] font-normal">
              A heatable lunchbox designed during the COVID-19 pandemic to
              address the needs of metro train operators who depended on local
              restaurants for warm meals during their breaks. Its rugged design
              makes it durable for outdoor use and the removable container makes
              it easy to clean. <br /> <br />
              Date: May 2022.
            </p>
          </div>
        </div>

        <div className="w-[60%] ml-[40%]">
          <div className="space-y-9">
            <img
              src={img1}
              alt="Modulo Image 1"
              className="w-full rounded-[4px] object-cover"
            />
            <img
              src={img2}
              alt="Modulo Image 2"
              className="w-full rounded-[4px] object-cover"
            />
            <img
              src={img3}
              alt="Modulo Image 3"
              className="w-full rounded-[4px] object-cover"
            />
            <img
              src={img4}
              alt="Modulo Image 4"
              className="w-full rounded-[4px] object-cover"
            />
            <img
              src={img5}
              alt="Modulo Image 5"
              className="w-full rounded-[4px] object-cover"
            />
            <img
              src={img6}
              alt="Modulo Image 6"
              className="w-full rounded-[4px] object-cover"
            />
          </div>
        </div>
      </div> */}

      <div className="overflow-y-scroll h-screen">
        <Header />
        <div className="flex my-12 gap-[120px]">
          {/* Right Side (Scrollable Images) */}
          <div id="nobar" className="scroll-smooth h-full overflow-y-scroll">
            <div className="space-y-9 mx-16">
              <img
                src={img1}
                alt="Modulo Image 1"
                className="w-full rounded-[4px] h-full object-cover "
              />
              <div className="">
                <h1 className="text-[16px] font-semibold mb-4">H-Eat°</h1>

                <p className="text-[14px] font-normal">
                  A heatable lunchbox designed during the COVID-19 pandemic to
                  address the needs of metro train operators who depended on
                  local restaurants for warm meals during their breaks. Its
                  rugged design makes it durable for outdoor use and the
                  removable container makes it easy to clean.
                </p>
                <p className="mt-2 text-[14px] font-normal">Date: May 2022.</p>
              </div>
              <div className="">
                <img
                  src={img2}
                  alt="Modulo Image 2"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
              <div className="">
                <img
                  src={img3}
                  alt="Modulo Image 3"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
              <div className="">
                <img
                  src={img4}
                  alt="Modulo Image 4"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
              <div className="">
                <img
                  src={img5}
                  alt="Modulo Image 5"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
              <div className="">
                <img
                  src={img6}
                  alt="Modulo Image 5"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
