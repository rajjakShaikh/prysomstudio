import imagenew from "../pages/images/imagenew.jpeg";
import homeimage2 from "../pages/images/homeimage2.jpg";
import homeimage3 from "../pages/images/homeimage3.jpg";
import home4 from "../pages/images/home4.png";
import home5 from "../pages/images/home5.png";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LinearBlur } from "progressive-blur";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const Work = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: imagenew, name: "Modulo", path: "/work/modulo" },
    { src: homeimage2, name: "H-Eat°", path: "/work/heat" },
    { src: homeimage3, name: "Casco", path: "/work/casco" },
    { src: home5, name: "El Junto - Coming Soon" },
    { src: home4, name: "Katha Mehfil - Coming Soon" },
  ];

  // Animation controls
  const headerControls = useAnimation();
  const firstRowControls = useAnimation();
  const secondRowControls = useAnimation();

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector("#nobar"), {
      damping: 0.1,
      renderByPixels: false,
      alwaysShowTracks: false,
      continuousScrolling: true,
    });

    scrollbar.track.xAxis.element.style.display = "none";
    scrollbar.track.yAxis.element.style.display = "none";

    // Start animations
    const sequence = async () => {
      // Animate header from the bottom
      await headerControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });

      // Animate first row of cards from the bottom
      await firstRowControls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 0.5 }, // Staggered delay
      }));

      // Animate second row of cards from the bottom
      await secondRowControls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 0.5 }, // Staggered delay
      }));
    };

    sequence();

    return () => {
      scrollbar.destroy();
    };
  }, [headerControls, firstRowControls, secondRowControls]);

  return (
    <>
      {/* Header with animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Start below and invisible
        animate={headerControls}
      >
        <Header />
      </motion.div>

      <div id="nobar" className="mx-5 md:mx-16 my-12 md:my-12 scrollbar-hide">
        <div
          id="nobar"
          className="scrollbar-hide overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-5 gap-y-5 md:gap-y-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              id="nobar"
              className="relative group cursor-pointer overflow-hidden rounded-[16px] hover:rounded-[24px] scrollbar-hide"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => image.path && navigate(image.path)}
              initial={{ y: 50, opacity: 0 }} // Start below and invisible
              animate={
                index < 3 ? firstRowControls : secondRowControls // First 3 cards use firstRowControls, rest use secondRowControls
              }
              custom={index % 3} // Stagger delay based on index
            >
              <div className="relative scrollbar-hide overflow-hidden rounded-[16px] hover:rounded-[24px]">
                {/* Image */}
                <LazyLoadImage
                  alt={image.name}
                  src={image.src}
                  className="w-full h-auto scrollbar-hide rounded-[16px] hover:rounded-[24px] transition-all duration-100"
                />

                {/* Apply blur on hover */}
                {hoveredIndex === index && (
                  <>
                    <LinearBlur
                      falloffPercentage={110}
                      side="bottom"
                      tint="rgba(255, 255, 255, 0.02)"
                      // radius={16}
                      style={{
                        position: "absolute",
                        background: "transparent",
                        inset: 0,
                        zIndex: 1,
                      }}
                    />
                  </>
                )}

                {/* Image name overlay */}
                <div className="absolute scrollbar-hide rounded-[16px] hover:rounded-[24px] z-10 bottom-0 left-0 right-0 p-[12px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className={`${
                      image.name === "Casco"
                        ? "text-white font-bold text-[16px]"
                        : "text-black font-bold text-[16px]"
                    }`}
                  >
                    {image.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
