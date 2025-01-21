import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Scrollbar from "smooth-scrollbar";

import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for blur effect

import img1 from "../pages/heatImages/1.jpg";
import img2 from "../pages/heatImages/2.jpg";
import img3 from "../pages/heatImages/3.jpg";
import img4 from "../pages/heatImages/4.jpg";
import img5 from "../pages/heatImages/5.png";
import img6 from "../pages/heatImages/6.jpg";
import Header from "../pages/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

export default function Heat() {
  const scrollContainerRef = useRef(null);

  const navigate = useNavigate();

  const navigateToWork = () => {
    navigate("/work");
  };

  const navigateToNext=()=>{
    navigate("/work/casco")
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollbar = Scrollbar.init(scrollContainer, {
      damping: 0.1, // Adjust damping for smoothness
    });
  
    return () => {
      scrollbar.destroy();
    };
  }, []);


  return (
<>

    <div className="overflow-y-scroll h-screen" ref={scrollContainerRef}>
      <Header />
      <div className="flex my-12 gap-[120px]">
        {/* Right Side (Scrollable Images) */}
        <div id="nobar" className="scroll-smooth h-full overflow-y-scroll">
          <div className="space-y-9 mx-5 md:mx-16">
            <LazyLoadImage
              src={img1}
              alt="Heat Image 1"
              className="w-full rounded-[4px] h-full object-cover"
            />
            <div>
              <h1 className="text-[16px] font-semibold mb-4">H-Eat°</h1>
              <p className="text-[14px] font-normal">
                A heatable lunchbox designed during the COVID-19 pandemic to
                address the needs of metro train operators who depended on local
                restaurants for warm meals during their breaks. Its rugged
                design makes it durable for outdoor use, and the removable
                container makes it easy to clean.
              </p>
              <p className="mt-2 text-[14px] font-normal">Date: May 2022.</p>
            </div>
            {[img2, img3, img4, img5, img6].map((image, index) => (
              <LazyLoadImage
                key={index}
                src={image}
                alt={`Heat Image ${index + 2}`}
                className="w-full h-full rounded-[4px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  mb-12 mx-5 md:mx-16">
       
        <div className="flex items-center">
        <NavLink to={"/work"}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-[14px]" />
        <button onClick={navigateToWork} className="text-[14px] ml-2 text-black font-medium">Back</button>
        </NavLink>
        </div>
      
        <div className="flex items-center justify-end">
        <NavLink to={"/work/casco"}>
        <button onClick={navigateToNext} className="text-[14px] mr-2 text-black font-medium">Next</button>
        <FontAwesomeIcon icon={faChevronRight} className="text-[14px]" />
        </NavLink>
        </div>
      </div>
    </div>
   
</>

  );
}
