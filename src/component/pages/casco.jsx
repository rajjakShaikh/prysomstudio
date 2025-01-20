import React from "react";

import img1 from "../pages/cascoImages/1.jpg";
import img2 from "../pages/cascoImages/2.jpg";
import img3 from "../pages/cascoImages/3.jpg";
import img4 from "../pages/cascoImages/4.jpg";
import img5 from "../pages/cascoImages/5.jpg";
import img6 from "../pages/cascoImages/6.png";
import img7 from "../pages/cascoImages/7.png";
import Header from "../pages/Header";

export default function Casco() {
  return (
    // <>
    //   <Header />
    //   <div className="flex mx-16 my-16 gap-[120px]">
    //     {/* Left Side (Sticky Content) */}
    //     <div className="w-[40%] sticky top-0 h-screen flex items-start">
    //       <div>
    //         <h1 className="text-[16px] font-semibold mb-4">Casco</h1>
    //         <p className="text-[14px] font-normal">
    //           A heatable lunchbox designed during the COVID-19 pandemic to
    //           address the needs of metro train operators who depended on local
    //           restaurants for warm meals during their breaks. Its rugged design
    //           makes it durable for outdoor use and the removable container makes
    //           it easy to clean. <br /> <br />
    //           Date: Oct 2021.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Right Side (Scrollable Images) */}
    //     <div
    //       id="nobar"
    //       className="w-[60%] scroll-smooth h-screen overflow-y-scroll"
    //     >
    //       <div className="space-y-9">
    //         <img
    //           src={img1}
    //           alt="Modulo Image 1"
    //           className="w-full rounded-[4px] h-full object-cover"
    //         />
    //         <img
    //           src={img2}
    //           alt="Modulo Image 2"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //         <img
    //           src={img3}
    //           alt="Modulo Image 3"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //         <img
    //           src={img4}
    //           alt="Modulo Image 4"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //         <img
    //           src={img5}
    //           alt="Modulo Image 5"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //         <img
    //           src={img6}
    //           alt="Modulo Image 6"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //         <img
    //           src={img7}
    //           alt="Modulo Image 7"
    //           className="w-full h-full rounded-[4px] object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </>
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
              <h1 className="text-[16px] font-semibold mb-4">Casco</h1>

              <p className="text-[14px] font-normal">
                A heatable lunchbox designed during the COVID-19 pandemic to
                address the needs of metro train operators who depended on local
                restaurants for warm meals during their breaks. Its rugged
                design makes it durable for outdoor use and the removable
                container makes it easy to clean.
              </p>
              <p className="mt-2 text-[14px] font-normal">Date: Oct 2021.</p>
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
            <div className="">
              <img
                src={img7}
                alt="Modulo Image 5"
                className="w-full h-full rounded-[4px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
