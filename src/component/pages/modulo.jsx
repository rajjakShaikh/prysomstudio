import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Scrollbar from "smooth-scrollbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
import { NavLink, useNavigate } from "react-router-dom";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

// Custom component for animated sections
function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Modulo() {
const navigate = useNavigate();

  const navigateToWork = () => {
    navigate("/work");
  };

  const navigateToNext = () => {
    navigate("/work/heat");
  };

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector("#nobar"), {
      damping: 0.1, // Adjust damping for smoothness
      alwaysShowTracks: false, // Make sure tracks are not forced to show
      continuousScrolling: true,
    });
  
    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
   
      <div className="overflow-y-scroll h-screen scrollbar-hide">
        <Header />
        <div className="flex my-9 gap-[120px]">
          <div id="nobar" className="">
            <div className="space-y-9 main-img mx-5 md:mx-16">
              <AnimatedSection>
                <LazyLoadImage
                  src={img1}
                  alt="Modulo Image 1"
                  className="w-full rounded-[4px] h-full object-cover"
                  height="100%"
                  width="100%"
                />  
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
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
              </AnimatedSection>

              {[img2, img3, img4, img5].map((image, index) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <LazyLoadImage
                    src={image}
                    alt={`Modulo Image ${index + 2}`}
                    className="w-full h-full rounded-[4px] object-cover"
                  />
                </AnimatedSection>
              ))}
            </div>

            {/* Mobile Screen Images */}
            <div>
              <div className="grid grid-flow-row grid-cols-7 gap-6 mt-9 mx-5 md:mx-16">
                {[
                  MobileScreenImage1,
                  MobileScreenImage2,
                  MobileScreenImage3,
                  MobileScreenImage4,
                  MobileScreenImage5,
                  MobileScreenImage6,
                  MobileScreenImage7,
                ].map((image, index) => (
                    <LazyLoadImage
                      src={image}
                      alt={`Mobile Screen ${index + 1}`}
                      className="object-cover rounded-[4px]"
                    />
                ))}
              </div>
            </div>

            <div className="mt-9 mx-5 md:mx-16">
              <AnimatedSection>
                <LazyLoadImage
                  src={img7}
                  alt="Modulo Image 7"
                  className="w-full h-full rounded-[4px] object-cover"
                />
              </AnimatedSection>
            </div>

            {/* 3D Images */}
            <div className="grid grid-cols-2 gap-4 my-9 mx-5 md:mx-16">
              <div className="grid grid-cols-2 gap-4">
                {[module3dimg, module3dimg2, module3dimg3, module3dimg4].map(
                  (image, index) => (
                      <LazyLoadImage
                        src={image}
                        alt={`Modulo 3D Image ${index + 1}`}
                        className="w-full h-full rounded-[4px] object-cover"
                      />
                  )
                )}
              </div>
                <LazyLoadImage
                  src={module3dimg5}
                  alt="Modulo 3D Image 5"
                  className="w-full h-full rounded-[4px] object-cover"
                />
            </div>

            <div className="mt-9 mx-5 md:mx-16">
                <LazyLoadImage
                  src={img9}
                  alt="Modulo Image 9"
                  className="w-full h-full rounded-[4px] object-cover"
                />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-12 mx-5 md:mx-16">
          
        <div className="flex items-center">
          <NavLink to={"/work"}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-[14px]" />
          <button onClick={navigateToWork} className="text-[14px] text-black ml-2 font-medium">Back</button>
          </NavLink>
          
        </div>
      
        <div className="flex items-center justify-end">
        <NavLink to="/work/heat">
        <button onClick={navigateToNext} className="text-[14px] text-black mr-2 font-medium">Next</button>
        <FontAwesomeIcon icon={faChevronRight} className="text-[14px]" />
        </NavLink>
         
        </div>
      </div>


      </div>
        
         
   

  );
}
