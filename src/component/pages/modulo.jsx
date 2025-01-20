import React from "react";

import img1 from "../pages/moduloimages/img1.jpg";
import img2 from "../pages/moduloimages/img2.jpg";
import img3 from "../pages/moduloimages/img3.jpg";
import img4 from "../pages/moduloimages/4.jpg";
import img5 from "../pages/moduloimages/5.jpg";
import img7 from "../pages/moduloimages/7.jpg";
import img9 from "../pages/moduloimages/9.jpg";

import module3dimg from "../pages/3dmoduleimage/1.jpg";
import module3dimg2 from "../pages/3dmoduleimage/2.jpg";
import module3dimg3 from "../pages/3dmoduleimage/3.jpg";
import module3dimg4 from "../pages/3dmoduleimage/4.jpg";
import module3dimg5 from "../pages/3dmoduleimage/5.jpg";

import MobileScreenImage1 from "../pages/mobilescreenimages/1.png";
import MobileScreenImage2 from "../pages/mobilescreenimages/2.png";
import MobileScreenImage3 from "../pages/mobilescreenimages/3.png";
import MobileScreenImage4 from "../pages/mobilescreenimages/4.png";
import MobileScreenImage5 from "../pages/mobilescreenimages/5.png";
import MobileScreenImage6 from "../pages/mobilescreenimages/6.png";
import MobileScreenImage7 from "../pages/mobilescreenimages/7.png";
import Header from "../pages/Header";

export default function Modulo() {
  return (
    <>
      {/* Make the whole page scrollable, including the header */}
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
                <h1 className="text-[16px] font-semibold mb-4">Modulo</h1>
                <p className="text-[14px] font-normal">
                  A pair of headphones designed to empower users to repair
                  rather than replace. Designed for self-assembly, these
                  headphones invite users to engage with the product on a deeper
                  level, transforming it into an act of discovery and connection
                  with its inner workings. The exposed connection points act as
                  signifiers that guide the user during assembly or disassembly.
                </p>
                <p className="mt-2 text-[14px] font-normal">Date: May 2023.</p>
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
            </div>

            {/* Mobile Screen Images with margin */}
            <div>
              <div className="grid grid-flow-row grid-cols-7 gap-6 mt-9 mx-16 ">
                <img
                  src={MobileScreenImage1}
                  alt="Mobile Screen 1"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage2}
                  alt="Mobile Screen 2"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage3}
                  alt="Mobile Screen 3"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage4}
                  alt="Mobile Screen 4"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage5}
                  alt="Mobile Screen 5"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage6}
                  alt="Mobile Screen 6"
                  className="object-cover rounded-[4px]"
                />
                <img
                  src={MobileScreenImage7}
                  alt="Mobile Screen 7"
                  className="object-cover rounded-[4px]"
                />
              </div>
            </div>
            <div className="mt-9 mx-16">
              <div>
                <img
                  src={img7}
                  alt="Modulo Image 1"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
            </div>

            {/* 3D Images with margin */}
            <div className="grid grid-cols-2 gap-4 my-9 mx-16">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src={module3dimg}
                    alt="Modulo Image 1"
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src={module3dimg2}
                    alt="Modulo Image 2"
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src={module3dimg3}
                    alt="Modulo Image 3"
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src={module3dimg4}
                    alt="Modulo Image 4"
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </div>
              </div>
              <div>
                <img
                  src={module3dimg5}
                  alt="Modulo Large Image"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </div>
            </div>
            <div className="mt-9 mx-16">
              <img
                src={img9}
                alt="Modulo Image 1"
                className="w-full h-full rounded-[4px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
